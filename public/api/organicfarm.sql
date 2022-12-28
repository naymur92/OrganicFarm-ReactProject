-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2022 at 07:32 AM
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
(10, 3, 40, '2022-12-17 12:42:56'),
(12, 0, 31, '2022-12-17 22:25:40');

-- --------------------------------------------------------

--
-- Table structure for table `harvests`
--

CREATE TABLE `harvests` (
  `id` mediumint(6) NOT NULL,
  `product_id` smallint(3) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `product_category` varchar(15) NOT NULL,
  `amount` mediumint(6) NOT NULL,
  `harvest_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `harvests`
--

INSERT INTO `harvests` (`id`, `product_id`, `product_name`, `product_category`, `amount`, `harvest_time`) VALUES
(1, 46, 'Banana', 'fruit', 120, '2022-12-20 23:09:17'),
(2, 39, 'Guava', 'fruit', 200, '2022-12-20 23:12:48'),
(3, 40, 'Orange', 'fruit', 2500, '2022-12-20 23:14:04'),
(4, 42, 'Mustured Flower Honey', 'honey', 70, '2022-12-20 23:19:45'),
(5, 43, 'Pahari Flower Honey', 'honey', 20, '2022-12-20 23:19:55'),
(6, 30, 'Carrot', 'vegetable', 1500, '2022-12-20 23:20:15'),
(7, 29, 'Fresh Tomato', 'vegetable', 2400, '2022-12-20 23:20:23'),
(8, 31, 'Onion', 'vegetable', 270, '2022-12-20 23:21:25'),
(9, 32, 'Potato', 'vegetable', 2000, '2022-12-20 23:21:35'),
(10, 33, 'Kacha Kola (Green Banana)', 'vegetable', 240, '2022-12-20 23:21:47'),
(11, 42, 'Mustured Flower Honey', 'honey', 160, '2022-12-28 12:10:31');

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
(24, 3, '[{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"3\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":3}]', 4200, 0, 4200, '{\"name\":\"Alauddin \",\"area\":\"dhaka\",\"zipcode\":\"1206\",\"address\":\"Mirpur 10\",\"phone\":\"01557\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-19 11:42:20'),
(25, 3, '[{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"3\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":3}]', 4200, 0, 4200, '{\"name\":\"Alauddin \",\"area\":\"dhaka\",\"zipcode\":\"1206\",\"address\":\"Mirpur 10\",\"phone\":\"0178\"}', 'cancelled', '{\"method\":\"cashondelivery\"}', '2022-12-19 11:46:11'),
(26, 4, '[{\"id\":\"46\",\"name\":\"Banana\",\"description\":\"Fresh Banana\",\"price\":\"55\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"banana.jpg\",\"stock\":\"200\",\"creation_time\":\"2022-12-01 15:01:13\",\"qty\":2},{\"id\":\"45\",\"name\":\"Lichi Flower Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"600\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"lichi-flower-honey.jpg\",\"stock\":\"300\",\"creation_time\":\"2022-12-01 13:17:35\",\"qty\":2},{\"id\":\"43\",\"name\":\"Pahari Flower Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"800\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"mustured-flower-honey.jpg\",\"stock\":\"20\",\"creation_time\":\"2022-12-01 13:16:43\",\"qty\":2},{\"id\":\"39\",\"name\":\"Guava\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"guava.jpg\",\"stock\":\"500\",\"creation_time\":\"2022-12-01 13:14:36\",\"qty\":2},{\"id\":\"41\",\"name\":\"Black Seed Honey\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"1400\",\"category\":\"honey\",\"status\":\"available\",\"thumbnail\":\"black-seed-honey.jpg\",\"stock\":\"3\",\"creation_time\":\"2022-12-01 13:15:33\",\"qty\":2}]', 5870, 0, 5870, '{\"name\":\"Fayzullah Aman\",\"area\":\"dhaka\",\"zipcode\":\"(none)\",\"address\":\"Rampura\",\"phone\":\"01746544\"}', 'delivered', '{\"method\":\"cashondelivery\"}', '2022-12-20 13:03:54'),
(27, 3, '[{\"id\":\"40\",\"name\":\"Orange\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"150\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"orange.jpg\",\"stock\":\"2500\",\"creation_time\":\"2022-12-01 13:14:58\",\"qty\":2}]', 300, 50, 350, '{\"name\":\"Alauddin \",\"area\":\"dhaka\",\"zipcode\":\"(none)\",\"address\":\"Banasree\",\"phone\":\"16587\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-21 08:26:51'),
(28, 3, '[{\"id\":\"32\",\"name\":\"Potato\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"25\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"potato.jpg\",\"stock\":\"2000\",\"creation_time\":\"2022-12-01 13:10:01\",\"qty\":2},{\"id\":\"39\",\"name\":\"Guava\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"80\",\"category\":\"fruit\",\"status\":\"available\",\"thumbnail\":\"guava.jpg\",\"stock\":\"200\",\"creation_time\":\"2022-12-01 13:14:36\",\"qty\":2}]', 210, 50, 260, '{\"name\":\"Alauddin \",\"area\":\"dhaka\",\"zipcode\":\"(none)\",\"address\":\"Palton\",\"phone\":\"1641114\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-21 08:27:30'),
(29, 3, '[{\"id\":\"31\",\"name\":\"Onion\",\"description\":\"The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.\",\"price\":\"45\",\"category\":\"vegetable\",\"status\":\"available\",\"thumbnail\":\"onion.jpg\",\"stock\":\"270\",\"creation_time\":\"2022-12-01 13:07:16\",\"qty\":4}]', 180, 50, 230, '{\"name\":\"Alauddin \",\"area\":\"dhaka\",\"zipcode\":\"(none)\",\"address\":\"Adabor\",\"phone\":\"0165654\"}', 'pending', '{\"method\":\"cashondelivery\"}', '2022-12-21 08:30:36');

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
(29, 'Fresh Tomato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 50, 'vegetable', 'available', 'tomatoes.jpg', 2400, '2022-12-01 13:03:06'),
(30, 'Carrot', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'vegetable', 'available', 'carrots.jpg', 1500, '2022-12-01 13:04:51'),
(31, 'Onion', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 45, 'vegetable', 'available', 'onion.jpg', 266, '2022-12-01 13:07:16'),
(32, 'Potato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 25, 'vegetable', 'available', 'potato.jpg', 1998, '2022-12-01 13:10:01'),
(33, 'Kacha Kola (Green Banana)', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 40, 'vegetable', 'upcoming', 'kacha_kola.jpg', 240, '2022-12-01 13:10:46'),
(34, 'Himsagor Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'unavailable', 'himsagor_mango.jpg', 0, '2022-12-01 13:11:24'),
(35, 'Langra Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 120, 'fruit', 'unavailable', 'Langra-mango.jpg', 0, '2022-12-01 13:12:07'),
(36, 'Harivanga Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 130, 'fruit', 'unavailable', 'Harivanga-Mango.png', 0, '2022-12-01 13:12:41'),
(37, 'Lichi', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 200, 'fruit', 'unavailable', 'Lichi.png', 0, '2022-12-01 13:13:05'),
(38, 'Jack Fruit', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 70, 'fruit', 'unavailable', 'jackfruit.jpg', 0, '2022-12-01 13:13:51'),
(39, 'Guava', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'fruit', 'available', 'guava.jpg', 198, '2022-12-01 13:14:36'),
(40, 'Orange', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'available', 'orange.jpg', 2498, '2022-12-01 13:14:58'),
(41, 'Black Seed Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 1400, 'honey', 'unavailable', 'black-seed-honey.jpg', 0, '2022-12-01 13:15:33'),
(42, 'Mustured Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 450, 'honey', 'available', 'mustured-flower-honey.jpg', 230, '2022-12-01 13:15:54'),
(43, 'Pahari Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 800, 'honey', 'available', 'mustured-flower-honey.jpg', 20, '2022-12-01 13:16:43'),
(44, 'Sundarban Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 900, 'honey', 'unavailable', 'sundarban-honey.jpg', 0, '2022-12-01 13:17:13'),
(45, 'Lichi Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 600, 'honey', 'unavailable', 'lichi-flower-honey.jpg', 0, '2022-12-01 13:17:35'),
(46, 'Banana', 'Fresh Banana', 55, 'fruit', 'available', 'banana.jpg', 120, '2022-12-01 15:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` mediumint(5) NOT NULL,
  `firstname` varchar(15) NOT NULL,
  `lastname` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(10) NOT NULL DEFAULT 'user',
  `status` varchar(10) NOT NULL DEFAULT 'pending',
  `thumbnail` varchar(100) NOT NULL,
  `creation_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `password`, `role`, `status`, `thumbnail`, `creation_time`) VALUES
(1, 'Naymur', 'Rahman', 'naymur@example.com', 'abcd1234', 'admin', 'active', '', '2022-11-30 23:55:21'),
(2, 'Kamrul', 'Hasan', 'kamrul@example.com', 'abcd1234', 'manager', 'active', '', '2022-11-30 23:55:21'),
(3, 'Alauddin', '', 'alo@example.com', 'abcd1234', 'user', 'active', '', '2022-12-11 15:15:01'),
(4, 'Fayzullah', 'Aman', 'fayzullah@example.com', 'abcd1234', 'user', 'blocked', '', '2022-12-19 21:41:32'),
(5, 'Amjad', 'Hossain', 'amjad@example.com', 'abcd1234', 'user', 'muted', '', '2022-12-19 21:42:09'),
(13, 'Naymur', 'Rahman', 'naymurrahman@yahoo.com', '1234', 'employee', 'active', 'Naymur-(13).jpg', '2022-12-20 10:40:20'),
(14, 'Mahmud', 'Hasan', 'mahmud@example.com', '1234', 'employee', 'active', '', '2022-12-20 23:53:23'),
(15, 'Ejaj', 'Ahmed', 'ejaj@example.com', '1234', 'manager', 'active', '', '2022-12-20 23:55:00'),
(16, 'Abdur', 'Rahman', 'abdrahman@example.com', '1234', 'employee', 'active', '', '2022-12-20 23:59:09'),
(17, 'Meshkat', 'Ali', 'meshkat@example.com', 'abcd1234', 'user', 'pending', '', '2022-12-20 23:59:58'),
(18, 'Ali', 'Hossen', 'ali@example.com', 'abcd1234', 'user', 'pending', 'Ali-(18).jpg', '2022-12-21 00:34:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`fv_id`);

--
-- Indexes for table `harvests`
--
ALTER TABLE `harvests`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `fv_id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `harvests`
--
ALTER TABLE `harvests`
  MODIFY `id` mediumint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` mediumint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
