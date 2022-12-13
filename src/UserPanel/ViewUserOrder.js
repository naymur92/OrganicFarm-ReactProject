import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import './ViewUserOrder.css';

function ViewUserOrder() {
  const [loginInfo, cancelOrder] = useOutletContext();
  const params = useParams();
  const [order, setOrder] = useState([]);

  const userOrder = async (id, userid) => {
    axios
      .get('http://localhost/wdpf51_React/organicfarm/api/orders/orders.php', {
        params: { id, userid },
      })
      .then((res) => {
        if (res.data.success) {
          setOrder(res.data.orders[0]);
        }
        // console.log(res.data);
      });
  };

  useEffect(() => {
    userOrder(params.id, loginInfo.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);
  // console.log(order.address.address);

  // convert MySQL DATETIME into javascript time
  function DateTime(time) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(time.time);
    return `${date.getHours() > 12 ? date.getHours() - 12 : null}:${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    } ${date.getHours() > 12 ? `PM` : `AM`} - ${date.getDate()} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}`;
  }

  return (
    <div
      className="card border-top border-bottom border-3"
      style={{ borderColor: '#4e9b35 !important' }}
    >
      <div className="card-header bg-theme">
        <h4 className="text-center text-light">View Order</h4>
      </div>
      <div className="card-body p-2">
        <span className="lead fw-bold mb-5" style={{ color: '#4e9b35' }}>
          Order Details
        </span>
        {order.status === 'pending' ? (
          <button
            type="button"
            onClick={() => cancelOrder(order.id, order.products)}
            className="btn btn-outline-danger float-end"
          >
            Cancel Order
          </button>
        ) : null}

        <div className="row mt-5">
          <div className="col mb-3">
            <p className="small text-muted mb-1">
              <strong>Time</strong>
            </p>
            <p>
              <DateTime time={order.order_time} />
            </p>
          </div>
          <div className="col mb-3">
            <p className="small text-muted mb-1">
              <strong>Order No.</strong>
            </p>
            <p>{order.id}</p>
          </div>
          <div className="col mb-3">
            <p className="small text-muted mb-1">
              <strong>Status</strong>
            </p>
            <p>{order.status}</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <h5 className="text-muted mb-1">
            <strong>Delevery Address:</strong>
          </h5>
          <address>
            <div className="row">
              <div className="col-3">
                <strong>Delevery To:</strong>
                <span className="float-end">{order.address?.name}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <strong>Area:</strong>
                <span className="float-end">{order.address?.area}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <strong>Address:</strong>
                <span className="float-end">{order.address?.address}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <strong>ZipCode:</strong>
                <span className="float-end">{order.address?.zipcode}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <strong>Phone:</strong>
                <span className="float-end">{order.address?.phone}</span>
              </div>
            </div>
          </address>
        </div>
        <hr />

        <div className="mx-n5 px-5 py-4" style={{ backgroundColor: '#f2f2f2' }}>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <p>
                <strong>Product Name</strong>
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <p>
                <strong>Quantity</strong>
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <p>
                <strong>Price</strong>
              </p>
            </div>
          </div>
          <hr />
          {order.products?.map((item, index) => (
            <div className="row" key={item.id}>
              <div className="col-md-6 col-lg-6">
                <p>
                  <span className="mx-1">{index + 1}.</span>
                  {item.name}
                </p>
              </div>
              <div className="col-md-3 col-lg-3">
                <p>{item.qty}</p>
              </div>
              <div className="col-md-3 col-lg-3">
                <p>Tk. {Number(item.price * item.qty).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="row">
            <div className="col-md-9 col-lg-9">
              <p className="mb-0">
                <strong>Shipping</strong>
              </p>
            </div>
            <div className="col-md-3 col-lg-3">
              <p className="mb-0">Tk. {Number(order.shipping).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="row my-4 bg-success mx-1 p-4 rounded">
          <div className="col-md-9 col-lg-9">
            <p className="lead fw-bold mb-0 text-light">
              <strong>Total Cost</strong>
            </p>
          </div>
          <div className="col-md-3 col-lg-3">
            <p className="lead fw-bold mb-0 text-light">Tk. {Number(order.total).toFixed(2)}</p>
          </div>
        </div>

        <p className="mt-4 pt-2 mb-0">
          Want any help?{' '}
          <Link to="/contact" style={{ color: '#4e9b35' }}>
            Please contact us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ViewUserOrder;
