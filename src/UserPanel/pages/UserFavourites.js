import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import DateTime from '../../Components/DateTime';

function UserFavourites() {
  const [loginInfo, cancelOrder] = useOutletContext();
  const [fav, setFav] = useState([]);

  const getFavourites = async (userid) => {
    await axios
      .get('http://localhost/wdpf51_React/organicfarm/api/favourites/get_favourites.php', {
        params: { userid },
      })
      .then((res) => {
        // console.log(res.data.favourites);
        if (res.data.success) {
          setFav(res.data.favourites);
        }
      });
  };

  const removeFavourite = async (id) => {
    await axios
      .delete('http://localhost/wdpf51_React/organicfarm/api/favourites/remove_favourite.php', {
        params: { id },
      })
      .then((res) => {
        // console.log(res.data);
        getFavourites(loginInfo.id);
      });
  };

  useEffect(() => {
    // document.getElementsByClassName('card')[0].scrollIntoView();
    getFavourites(loginInfo.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(fav);

  return (
    <div className="card">
      <div className="card-header bg-theme">
        <h3 className="text-light text-center">Wishlists</h3>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr className="">
              <th>SL No.</th>
              <th>Product Thumbnail</th>
              <th>Product Name</th>
              <th>Added Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fav?.map((item, index) => (
              <tr key={item.fv_id} className="align-middle">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`/assets/images/product/${item.thumbnail}`}
                    alt=""
                    style={{ width: '80px' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <DateTime time={item.time} />
                </td>
                <td>
                  <div className="d-flex justify-content-between mx-3">
                    <Link to={`/shop/view-product/${item.id}`} target="_blank">
                      <i className="fas fa-eye text-success" />
                    </Link>
                    <a role="button" onClick={() => removeFavourite(item.fv_id)}>
                      <i className="fas fa-trash text-danger" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserFavourites;
