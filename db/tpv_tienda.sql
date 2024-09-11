-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-09-2024 a las 15:57:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpv_tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalleVenta`
--

CREATE TABLE `detalleVenta` (
  `id` int(11) NOT NULL,
  `id_venta` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `categoria` varchar(20) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalleVenta`
--

INSERT INTO `detalleVenta` (`id`, `id_venta`, `cantidad`, `categoria`, `precio`, `fecha_creacion`) VALUES
(1, 1, 1, 'Regalos', 2.00, '2024-07-02 13:39:02'),
(2, 1, 1, 'Drogueria', 22.00, '2024-07-02 13:39:02'),
(3, 2, 2, 'Papeleria', 7.00, '2024-07-02 13:40:04'),
(4, 2, 1, 'Drogueria', 1.00, '2024-07-02 13:40:04'),
(5, 2, 2, 'Joyas_Plata', 24.00, '2024-07-02 13:40:04'),
(6, 3, 2, 'Papeleria', 2.00, '2024-07-02 13:53:57'),
(7, 3, 1, 'Papeleria', 2.00, '2024-07-02 13:53:57'),
(8, 4, 1, 'Regalos', 1.00, '2024-08-29 14:25:07'),
(9, 4, 1, 'Juguetes', 1.00, '2024-08-29 14:25:07'),
(10, 5, 1, 'Regalos', 1.00, '2024-08-29 14:42:01'),
(11, 5, 1, 'Regalos', 1.00, '2024-08-29 14:42:01'),
(12, 5, 1, 'Papeleria', 1.00, '2024-08-29 14:42:01'),
(13, 6, 1, 'Regalos', 2.00, '2024-08-29 14:45:30'),
(14, 6, 1, 'Papeleria', 2.00, '2024-08-29 14:45:30'),
(15, 7, 1, 'Regalos', 1.00, '2024-08-29 14:46:09'),
(16, 7, 1, 'Regalos', 2.00, '2024-08-29 14:46:09'),
(17, 8, 1, 'Regalos', 2.00, '2024-08-29 14:58:32'),
(18, 9, 1, 'Regalos', 2.00, '2024-08-29 15:00:13'),
(19, 9, 1, 'Regalos', 2.00, '2024-08-29 15:00:13'),
(20, 10, 1, 'Regalos', 2.00, '2024-08-29 15:08:01'),
(21, 10, 1, 'Regalos', 2.00, '2024-08-29 15:08:01'),
(22, 11, 1, 'Regalos', 2.00, '2024-08-29 15:09:18'),
(23, 11, 1, 'Regalos', 2.00, '2024-08-29 15:09:18'),
(24, 12, 1, 'Regalos', 2.00, '2024-08-29 15:10:31'),
(25, 12, 1, 'Regalos', 2.00, '2024-08-29 15:10:32'),
(26, 13, 1, 'Regalos', 2.00, '2024-08-29 15:11:46'),
(27, 13, 1, 'Regalos', 2.00, '2024-08-29 15:11:46'),
(28, 14, 1, 'Regalos', 2.00, '2024-08-29 15:27:26'),
(29, 14, 1, 'Regalos', 2.00, '2024-08-29 15:27:26'),
(30, 15, 1, 'Regalos', 2.00, '2024-08-29 15:32:02'),
(31, 15, 1, 'Regalos', 2.00, '2024-08-29 15:32:02'),
(32, 15, 1, 'Regalos', 2.00, '2024-08-29 15:32:02'),
(33, 16, 1, 'Regalos', 2.00, '2024-08-29 15:36:46'),
(34, 16, 1, 'Regalos', 2.00, '2024-08-29 15:36:46'),
(35, 17, 1, 'Regalos', 3.00, '2024-08-29 15:37:30'),
(36, 17, 1, 'Regalos', 2.00, '2024-08-29 15:37:30'),
(37, 18, 1, 'Regalos', 2.00, '2024-08-29 15:39:13'),
(38, 19, 1, 'Regalos', 5.00, '2024-08-29 15:40:19'),
(39, 20, 1, 'Regalos', 3.00, '2024-08-29 15:40:56'),
(40, 20, 1, 'Regalos', 3.00, '2024-08-29 15:40:56'),
(41, 21, 1, 'Regalos', 3.00, '2024-08-29 15:42:07'),
(42, 21, 1, 'Regalos', 3.00, '2024-08-29 15:42:07'),
(43, 22, 1, 'Regalos', 3.00, '2024-08-29 15:43:09'),
(44, 22, 1, 'Regalos', 3.00, '2024-08-29 15:43:09'),
(45, 23, 1, 'Regalos', 3.00, '2024-08-29 15:45:44'),
(46, 23, 1, 'Regalos', 3.00, '2024-08-29 15:45:44'),
(47, 24, 1, 'Regalos', 2.00, '2024-08-29 15:47:39'),
(48, 24, 1, 'Regalos', 2.00, '2024-08-29 15:47:39'),
(49, 25, 1, 'Regalos', 2.00, '2024-08-29 15:51:37'),
(50, 25, 1, 'Regalos', 2.00, '2024-08-29 15:51:37'),
(51, 26, 1, 'Regalos', 4.00, '2024-08-29 15:54:16'),
(52, 26, 1, 'Regalos', 3.00, '2024-08-29 15:54:16'),
(53, 26, 1, 'Regalos', 5.00, '2024-08-29 15:54:16'),
(54, 27, 1, 'Regalos', 3.00, '2024-08-29 16:02:06'),
(55, 27, 1, 'Regalos', 3.00, '2024-08-29 16:02:06'),
(56, 28, 1, 'Regalos', 3.00, '2024-08-29 16:02:42'),
(57, 28, 1, 'Regalos', 3.00, '2024-08-29 16:02:42'),
(58, 29, 1, 'Regalos', 3.00, '2024-08-29 16:02:59'),
(59, 29, 1, 'Regalos', 3.00, '2024-08-29 16:02:59'),
(60, 30, 1, 'Regalos', 3.00, '2024-08-29 16:03:21'),
(61, 30, 1, 'Regalos', 3.00, '2024-08-29 16:03:21'),
(62, 31, 1, 'Regalos', 3.00, '2024-08-29 16:05:22'),
(63, 31, 1, 'Regalos', 3.00, '2024-08-29 16:05:22'),
(64, 32, 1, 'Regalos', 3.00, '2024-08-29 16:05:47'),
(65, 32, 1, 'Regalos', 3.00, '2024-08-29 16:05:47'),
(66, 33, 1, 'Regalos', 2.00, '2024-09-10 14:21:49'),
(67, 34, 1, 'Drogueria', 1.00, '2024-09-11 13:32:53'),
(68, 34, 1, 'Regalos', 2.00, '2024-09-11 13:32:53'),
(69, 34, 1, 'Regalos', 2.00, '2024-09-11 13:32:53'),
(70, 35, 1, 'Papeleria', 2.00, '2024-09-11 13:34:09'),
(71, 35, 1, 'Regalos', 2.00, '2024-09-11 13:34:09'),
(72, 35, 1, 'Regalos', 2.00, '2024-09-11 13:34:09'),
(73, 36, 1, 'Regalos', 2.00, '2024-09-11 13:39:19'),
(74, 36, 1, 'Regalos', 2.00, '2024-09-11 13:39:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `totalVenta`
--

CREATE TABLE `totalVenta` (
  `id` int(11) NOT NULL,
  `metodo_pago` varchar(20) DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `totalVenta`
--

INSERT INTO `totalVenta` (`id`, `metodo_pago`, `total`, `fecha_creacion`) VALUES
(1, 'efectivo', 24.00, '2024-07-02 13:39:02'),
(2, 'efectivo', 32.00, '2024-07-02 13:40:04'),
(3, 'efectivo', 4.00, '2024-07-02 13:53:57'),
(4, 'efectivo', 2.00, '2024-08-29 14:25:06'),
(5, 'efectivo', 3.00, '2024-08-29 14:42:01'),
(6, 'efectivo', 4.00, '2024-08-29 14:45:30'),
(7, 'efectivo', 3.00, '2024-08-29 14:46:09'),
(8, 'efectivo', 2.00, '2024-08-29 14:58:32'),
(9, 'efectivo', 4.00, '2024-08-29 15:00:13'),
(10, 'efectivo', 4.00, '2024-08-29 15:08:00'),
(11, 'efectivo', 4.00, '2024-08-29 15:09:18'),
(12, 'efectivo', 4.00, '2024-08-29 15:10:31'),
(13, 'efectivo', 4.00, '2024-08-29 15:11:46'),
(14, 'efectivo', 4.00, '2024-08-29 15:27:25'),
(15, 'efectivo', 6.00, '2024-08-29 15:32:02'),
(16, 'efectivo', 4.00, '2024-08-29 15:36:46'),
(17, 'efectivo', 5.00, '2024-08-29 15:37:30'),
(18, 'efectivo', 2.00, '2024-08-29 15:39:13'),
(19, 'efectivo', 5.00, '2024-08-29 15:40:19'),
(20, 'efectivo', 6.00, '2024-08-29 15:40:56'),
(21, 'efectivo', 6.00, '2024-08-29 15:42:07'),
(22, 'efectivo', 6.00, '2024-08-29 15:43:09'),
(23, 'efectivo', 6.00, '2024-08-29 15:45:44'),
(24, 'efectivo', 4.00, '2024-08-29 15:47:39'),
(25, 'efectivo', 4.00, '2024-08-29 15:51:37'),
(26, 'efectivo', 12.00, '2024-08-29 15:54:16'),
(27, 'efectivo', 6.00, '2024-08-29 16:02:06'),
(28, 'efectivo', 6.00, '2024-08-29 16:02:42'),
(29, 'efectivo', 6.00, '2024-08-29 16:02:59'),
(30, 'efectivo', 6.00, '2024-08-29 16:03:21'),
(31, 'efectivo', 6.00, '2024-08-29 16:05:22'),
(32, 'efectivo', 6.00, '2024-08-29 16:05:47'),
(33, 'efectivo', 2.00, '2024-09-10 14:21:49'),
(34, 'efectivo', 5.00, '2024-09-11 13:32:53'),
(35, 'efectivo', 6.00, '2024-09-11 13:34:09'),
(36, 'efectivo', 4.00, '2024-09-11 13:39:19');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detalleVenta`
--
ALTER TABLE `detalleVenta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_venta` (`id_venta`);

--
-- Indices de la tabla `totalVenta`
--
ALTER TABLE `totalVenta`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detalleVenta`
--
ALTER TABLE `detalleVenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT de la tabla `totalVenta`
--
ALTER TABLE `totalVenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalleVenta`
--
ALTER TABLE `detalleVenta`
  ADD CONSTRAINT `detalleVenta_ibfk_1` FOREIGN KEY (`id_venta`) REFERENCES `totalVenta` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
