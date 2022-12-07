-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2022 at 08:25 AM
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
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` mediumint(5) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(10) NOT NULL,
  `creation_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `password`, `role`, `creation_time`) VALUES
(1, 'Naymur Rahman', 'naymur@example.com', 'abcd1234', 'admin', '2022-11-30 23:55:21'),
(2, 'Kamrul Hasan', 'kamrul@example.com', 'abcd1234', 'manager', '2022-11-30 23:55:21');

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
(29, 'Fresh Tomato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 50, 'vegetable', 'available', 'tomatoes.jpg', 250, '2022-12-01 13:03:06'),
(30, 'Carrot', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'vegetable', 'available', 'carrots.jpg', 300, '2022-12-01 13:04:51'),
(31, 'Onion', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 45, 'vegetable', 'available', 'onion.jpg', 350, '2022-12-01 13:07:16'),
(32, 'Potato', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 25, 'vegetable', 'available', 'potato.jpg', 450, '2022-12-01 13:10:01'),
(33, 'Kacha Kola (Green Banana)', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 40, 'vegetable', 'available', 'kacha_kola.jpg', 400, '2022-12-01 13:10:46'),
(34, 'Himsagor Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'unavailable', 'himsagor_mango.jpg', 0, '2022-12-01 13:11:24'),
(35, 'Langra Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 120, 'fruit', 'upcoming', 'Langra-mango.jpg', 0, '2022-12-01 13:12:07'),
(36, 'Harivanga Mango', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 130, 'fruit', 'unavailable', 'Harivanga-Mango.png', 0, '2022-12-01 13:12:41'),
(37, 'Lichi', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 200, 'fruit', 'upcoming', 'Lichi.png', 0, '2022-12-01 13:13:05'),
(38, 'Jack Fruit', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 70, 'fruit', 'available', 'jackfruit.jpg', 155, '2022-12-01 13:13:51'),
(39, 'Guava', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 80, 'fruit', 'available', 'guava.jpg', 500, '2022-12-01 13:14:36'),
(40, 'Orange', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 150, 'fruit', 'available', 'orange.jpg', 4500, '2022-12-01 13:14:58'),
(41, 'Black Seed Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 1400, 'honey', 'available', 'black-seed-honey.jpg', 400, '2022-12-01 13:15:33'),
(42, 'Mustured Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 450, 'honey', 'upcoming', 'mustured-flower-honey.jpg', 0, '2022-12-01 13:15:54'),
(43, 'Pahari Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 800, 'honey', 'upcoming', 'mustured-flower-honey.jpg', 0, '2022-12-01 13:16:43'),
(44, 'Sundarban Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 900, 'honey', 'unavailable', 'sundarban-honey.jpg', 0, '2022-12-01 13:17:13'),
(45, 'Lichi Flower Honey', 'The technical details, including the use of power words and A/B tests, can be the difference between a potential buyer on your ecommerce website and those customers shopping at a competitor with similar products.', 600, 'honey', 'available', 'lichi-flower-honey.jpg', 300, '2022-12-01 13:17:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
