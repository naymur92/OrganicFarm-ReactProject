-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2022 at 08:10 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `organicfarm`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE `favourites` (
  `fv_id` mediumint(5) NOT NULL,
  `user_id` smallint(5) NOT NULL,
  `prod_id` mediumint(5) NOT NULL,
  `time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favourites`
--

INSERT INTO `favourites` (`fv_id`, `user_id`, `prod_id`, `time`) VALUES
(1, 3, 30, '2022-12-13 21:52:26'),
(2, 3, 29, '2022-12-14 00:04:56'),
(5, 3, 31, '2022-12-17 12:42:44'),
(6, 3, 32, '2022-12-17 12:42:46'),
(7, 3, 33, '2022-12-17 12:42:48'),
(9, 3, 39, '2022-12-17 12:42:54'),
(10, 3, 40, '2022-12-17 12:42:56');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` mediumint(6) NOT NULL,
  `user_id` mediumint(6) NOT NULL,
  `products` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`products`)),
  `subtotal` mediumint(6) NOT NULL,
  `shipping` smallint(4) NOT NULL,
  `total` mediumint(7) NOT NULL,
  `address` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`address`)),
  `status` varchar(15) NOT NULL DEFAULT 'pending',
  `payment` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`payment`)),
  `order_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `products`, `subtotal`, `shipping`, `total`, `address`, `status`, `payment`, `order_time`) VALUES
(1, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":3},{\"id\":\"34\",\"name\":\"Himsagor Mango\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"150\",\"category\":\"fruit\",\"status\":\"unavailable\",\"thumbnail\":\"himsagor_mango.jpg\",\"stock\":\"0\",\"creation_time\":\"2022-12-01 13:11:24\",\"qty\":3},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":4}]', 955, 50, 1005, '{\"area\":\"dhaka\",\"zipcode\":\"\",\"address\":\"asf\",\"phone\":\"4356\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 17:31:20'),
(2, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:08:29'),
(3, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:11:30'),
(4, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:11:51'),
(5, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:12:36'),
(6, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:13:08'),
(7, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:14:48'),
(8, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:15:53'),
(9, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"350\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"29\",\"name\":\"Fresh Tomato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"50\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"tomatoes.jpg\",\"stock\":\"250\",\"creation_time\":\"2022-12-01 13:03:06\",\"qty\":1}]', 325, 150, 475, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sdf\",\"phone\":\"54\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:16:10'),
(10, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"349\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"38\",\"name\":\"Jack Fruit\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"70\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"jackfruit.jpg\",\"stock\":\"155\",\"creation_time\":\"2022-12-01 13:13:51\",\"qty\":1},{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"400\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":1}]', 1565, 50, 1615, '{\"area\":\"dhaka\",\"zipcode\":\"\",\"address\":\"Dhaka\",\"phone\":\"0155\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:21:14'),
(11, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"349\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"38\",\"name\":\"Jack Fruit\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"70\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"jackfruit.jpg\",\"stock\":\"155\",\"creation_time\":\"2022-12-01 13:13:51\",\"qty\":1},{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"400\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":1}]', 1665, 150, 1815, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"dsfasdfg\",\"phone\":\"5676\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:23:09'),
(12, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"349\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"38\",\"name\":\"Jack Fruit\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"70\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"jackfruit.jpg\",\"stock\":\"155\",\"creation_time\":\"2022-12-01 13:13:51\",\"qty\":1},{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"400\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":1}]', 1665, 150, 1815, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"dsfafg\",\"phone\":\"573\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:26:01'),
(13, 3, '[{\"id\":\"30\",\"name\":\"Carrot\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"carrots.jpg\",\"stock\":\"299\",\"creation_time\":\"2022-12-01 13:04:51\",\"qty\":1},{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"348\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1},{\"id\":\"38\",\"name\":\"Jack Fruit\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"70\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"jackfruit.jpg\",\"stock\":\"154\",\"creation_time\":\"2022-12-01 13:13:51\",\"qty\":1}]', 345, 150, 495, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"dfhsdfh\",\"phone\":\"467\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:27:06'),
(14, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"347\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1}]', 195, 150, 345, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"erweytwe\",\"phone\":\"76847\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:34:49'),
(15, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"347\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1}]', 195, 150, 345, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"sd\",\"phone\":\"546\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:38:14'),
(16, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"346\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1}]', 195, 150, 345, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"fdg3456\",\"phone\":\"345\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:50:31'),
(17, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"346\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":1}]', 195, 150, 345, '{\"area\":\"\",\"zipcode\":\"\",\"address\":\"ga\",\"phone\":\"23\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-12 18:53:26');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `price` mediumint(5) NOT NULL,
  `category` varchar(10) NOT NULL,
  `status` varchar(15) NOT NULL,
  `thumbnail` varchar(50) NOT NULL,
  `stock` smallint(5) NOT NULL,
  `creation_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category`, `status`, `thumbnail`, `stock`, `creation_time`) VALUES
(29, 'Fresh Tomato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 50, 'vegetable', 'available', 'tomatoes.jpg', 252, '2022-12-01 13:03:06'),
(30, 'Carrot', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'vegetable', 'available', 'carrots.jpg', 302, '2022-12-01 13:04:51'),
(31, 'Onion', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 45, 'vegetable', 'available', 'onion.jpg', 349, '2022-12-01 13:07:16'),
(32, 'Potato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 25, 'vegetable', 'available', 'potato.jpg', 450, '2022-12-01 13:10:01'),
(33, 'Kacha Kola (Green Banana)', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 40, 'vegetable', 'available', 'kacha_kola.jpg', 400, '2022-12-01 13:10:46'),
(34, 'Himsagor Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'unavailable', 'himsagor_mango.jpg', 0, '2022-12-01 13:11:24'),
(35, 'Langra Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 120, 'fruit', 'upcoming', 'Langra-mango.jpg', 0, '2022-12-01 13:12:07'),
(36, 'Harivanga Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 130, 'fruit', 'unavailable', 'Harivanga-Mango.png', 0, '2022-12-01 13:12:41'),
(37, 'Lichi', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 200, 'fruit', 'upcoming', 'Lichi.png', 0, '2022-12-01 13:13:05'),
(38, 'Jack Fruit', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 70, 'fruit', 'available', 'jackfruit.jpg', 154, '2022-12-01 13:13:51'),
(39, 'Guava', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'fruit', 'available', 'guava.jpg', 500, '2022-12-01 13:14:36'),
(40, 'Orange', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'available', 'orange.jpg', 4500, '2022-12-01 13:14:58'),
(41, 'Black Seed Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 1400, 'honey', 'available', 'black-seed-honey.jpg', 3, '2022-12-01 13:15:33'),
(42, 'Mustured Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 450, 'honey', 'upcoming', 'mustured-flower-honey.jpg', 0, '2022-12-01 13:15:54'),
(43, 'Pahari Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 800, 'honey', 'upcoming', 'mustured-flower-honey.jpg', 0, '2022-12-01 13:16:43'),
(44, 'Sundarban Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 900, 'honey', 'unavailable', 'sundarban-honey.jpg', 0, '2022-12-01 13:17:13'),
(45, 'Lichi Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 600, 'honey', 'available', 'lichi-flower-honey.jpg', 300, '2022-12-01 13:17:35'),
(46, 'Banana', 'Fresh Banana', 55, 'fruit', 'available', 'banana.jpg', 200, '2022-12-01 15:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` mediumint(5) NOT NULL,
  `firstname` varchar(15) NOT NULL,
  `lastname` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user',
  `status` varchar(10) NOT NULL DEFAULT 'pending',
  `creation_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `role`, `status`, `creation_time`) VALUES
(1, 'Naymur', 'Rahman', 'naymur@example.com', 'abcd1234', 'admin', 'active', '2022-11-30 23:55:21'),
(2, 'Kamrul', 'Hasan', 'kamrul@example.com', 'abcd1234', 'manager', 'active', '2022-11-30 23:55:21'),
(3, 'Alauddin', '', 'alo@example.com', 'abcd1234', 'user', 'pending', '2022-12-11 15:15:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`fv_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favourites`
--
ALTER TABLE `favourites`
  MODIFY `fv_id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` mediumint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
