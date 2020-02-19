-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2020 a las 18:32:38
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laravel_map`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `infrastructures`
--

CREATE TABLE `infrastructures` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `infrastructures`
--

INSERT INTO `infrastructures` (`id`, `name`) VALUES
(1, 'Luminarias'),
(2, 'Luminarias Sin Codigo [Borroso/No Visible]'),
(3, 'Poste Concreto'),
(4, 'Poste Metalico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_02_11_144409_create_infrastructures_table', 1),
(2, '2020_02_12_135449_create_problems_lists_table', 1),
(3, '2020_02_12_185942_create_neighbors_table', 1),
(4, '2020_02_13_135449_create_pqrs_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `neighbors`
--

CREATE TABLE `neighbors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `neighbors`
--

INSERT INTO `neighbors` (`id`, `name`) VALUES
(1, 'Abajo'),
(2, 'Adela de Char'),
(3, 'Alameda del Río'),
(4, 'Alfonso López'),
(5, 'Altamira'),
(6, 'Altos de Riomar'),
(7, 'Altos del Limón'),
(8, 'Altos del Prado'),
(9, 'Altos del Prado'),
(10, 'América'),
(11, 'Andalucía'),
(12, 'Atlántico'),
(13, 'Barlovento'),
(14, 'Bella Arenas'),
(15, 'Bellavista'),
(16, 'Bernando Hoyos'),
(17, 'Betania'),
(18, 'Boston'),
(19, 'Boyacá'),
(20, 'Buena Esperanza'),
(21, 'Buenos Aires'),
(22, 'California'),
(23, 'Campo Alegre'),
(24, 'Caribe Verde'),
(25, 'Carlos Meisel'),
(26, 'Carrizal'),
(27, 'Centro'),
(28, 'Cevillar'),
(29, 'Chiquinquirá'),
(30, 'Ciudad Jardín'),
(31, 'Ciudad Modesto'),
(32, 'Ciudadela 20 de Julio'),
(33, 'Ciudadela de La Paz'),
(34, 'Ciudadela de La Salud'),
(35, 'Colina Campestre'),
(36, 'Colombia'),
(37, 'Conjunto Residencial Prados Del Edén'),
(38, 'Cordialidad'),
(39, 'Corrigimiento Juan Mina'),
(40, 'Costa hermosa'),
(41, 'Cuchilla de Villate'),
(42, 'El Boliche'),
(43, 'El Bosque'),
(44, 'El Campito'),
(45, 'El Carmen'),
(46, 'El Castillo'),
(47, 'El Country'),
(48, 'El Edén'),
(49, 'El Ferri'),
(50, 'El Golf'),
(51, 'El Golf'),
(52, 'El Golfo'),
(53, 'El Limoncito'),
(54, 'El Limón'),
(55, 'El Milagro'),
(56, 'El Poblado'),
(57, 'El Porvenir'),
(58, 'El Prado'),
(59, 'El Pueblo'),
(60, 'El Recreo'),
(61, 'El Romance'),
(62, 'El Rosario'),
(63, 'El Rubí'),
(64, 'El Santuario'),
(65, 'El Silencio'),
(66, 'El Tabor'),
(67, 'El Valle'),
(68, 'Evaristo Sourdis'),
(69, 'Gerlein y Villate'),
(70, 'Granadillo'),
(71, 'José Antonio Galán'),
(72, 'Juan Mina'),
(73, 'Kalamary'),
(74, 'Kennedy'),
(75, 'La Arboraya'),
(76, 'La Arboraya'),
(77, 'La Campiña'),
(78, 'La Castellana'),
(79, 'La Ceiba'),
(80, 'La Chinita'),
(81, 'La Concepción'),
(82, 'La Cumbre'),
(83, 'La Esmeralda'),
(84, 'La Felicidad'),
(85, 'La Floresta'),
(86, 'La Florida'),
(87, 'La Gloria'),
(88, 'La Libertad'),
(89, 'La Luz'),
(90, 'La Magdalena'),
(91, 'La Manga'),
(92, 'La Paz'),
(93, 'La Playa'),
(94, 'La Pradera'),
(95, 'La Sierra'),
(96, 'La Sierra'),
(97, 'La Unión'),
(98, 'La Victoria'),
(99, 'La Victoria'),
(100, 'Las Américas'),
(101, 'Las Colinas'),
(102, 'Las Colinas'),
(103, 'Las Delicias'),
(104, 'Las Dunas'),
(105, 'Las Estrellas'),
(106, 'Las Flores'),
(107, 'Las Gardenias'),
(108, 'Las Granjas'),
(109, 'Las Malvinas'),
(110, 'Las Mercedes'),
(111, 'Las Nieves'),
(112, 'Las Palmas'),
(113, 'Las Terrazas'),
(114, 'Las Tres Avemarías'),
(115, 'Lipaya'),
(116, 'Loma Fresca'),
(117, 'Los Alpes'),
(118, 'Los Andes'),
(119, 'Los Continentes'),
(120, 'Los Girasoles'),
(121, 'Los Jobos'),
(122, 'Los Laureles'),
(123, 'Los Nogales'),
(124, 'Los Olivos'),
(125, 'Los Pinos'),
(126, 'Los Rosales'),
(127, 'Los Trupillos'),
(128, 'Los Ángeles'),
(129, 'Lucero'),
(130, 'Me Quejo'),
(131, 'Mercedes Sur'),
(132, 'Miramar'),
(133, 'Modelo'),
(134, 'Moderno'),
(135, 'Montecristo'),
(136, 'Montes'),
(137, 'Nueva Colombia'),
(138, 'Nueva Granada'),
(139, 'Nuevo Horizonte'),
(140, 'Olaya'),
(141, 'Paraíso'),
(142, 'Pasadena'),
(143, 'Pinar del Río'),
(144, 'Por Fin'),
(145, 'Primero de Mayo'),
(146, 'Pumarejo'),
(147, 'Rebolo'),
(148, 'Riomar'),
(149, 'San Felipe'),
(150, 'San Francisco'),
(151, 'San Isidro'),
(152, 'San José'),
(153, 'San Luis'),
(154, 'San Marino'),
(155, 'San Nicolás'),
(156, 'San Roque'),
(157, 'San Salvador'),
(158, 'San Vicente'),
(159, 'Santa Ana'),
(160, 'Santa Helena'),
(161, 'Santa María'),
(162, 'Santa Mónica'),
(163, 'Santo Domingo'),
(164, 'Siape'),
(165, 'Siete de Abril'),
(166, 'Siete de Agosto'),
(167, 'Simón Bolívar'),
(168, 'Solaire'),
(169, 'Tayrona'),
(170, 'Terrenos Pastoral Social'),
(171, 'Universal I y II'),
(172, 'Urbanización Colinas Campestre Edén 2000'),
(173, 'Urbanización El Pueblo'),
(174, 'Urbanización La Luz'),
(175, 'Urbanización La Playa'),
(176, 'Urbanización Las Cayenas'),
(177, 'Urbanización Villas de San Pablo'),
(178, 'Veinte de Julio'),
(179, 'Villa Blanca'),
(180, 'Villa campestre'),
(181, 'Villa Carolina'),
(182, 'Villa del Carmen'),
(183, 'Villa del Este'),
(184, 'Villa Del Rosario'),
(185, 'Villa Flor'),
(186, 'Villa San Carlos'),
(187, 'Villa San Pablo'),
(188, 'Villa San Pedro Alejandrino'),
(189, 'Villa San Pedro I Etapa'),
(190, 'Villa San Pedro II'),
(191, 'Villa Santos'),
(192, 'Villa Sevilla'),
(193, 'Villanueva'),
(194, 'Villate');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pqrs`
--

CREATE TABLE `pqrs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `infrastructure_id` bigint(20) UNSIGNED NOT NULL,
  `in_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `problem_id` bigint(20) UNSIGNED NOT NULL,
  `neighbor_id` bigint(20) UNSIGNED NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `issue` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `lat` double(8,2) NOT NULL,
  `long` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `problem_lists`
--

CREATE TABLE `problem_lists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `problem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `problem_lists`
--

INSERT INTO `problem_lists` (`id`, `problem`) VALUES
(1, 'CABLE EN SUELO'),
(2, 'CANCHA APAGADA'),
(3, 'LUMINARIA APAGADA'),
(4, 'LUMINARIA ENCENDIDA PERMANENTE'),
(5, 'LUMINARIA INTERMITENTE'),
(6, 'LUMINARIA ROTA'),
(7, 'PARQUE APAGADO'),
(8, 'PODAR ARBOLES'),
(9, 'POSTE INCLINADO'),
(10, 'REVISAR LUMINARIAS'),
(11, 'SECTOR APAGADO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `infrastructures`
--
ALTER TABLE `infrastructures`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `neighbors`
--
ALTER TABLE `neighbors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pqrs_infrastructure_id_foreign` (`infrastructure_id`),
  ADD KEY `pqrs_problem_id_foreign` (`problem_id`),
  ADD KEY `pqrs_neighbor_id_foreign` (`neighbor_id`);

--
-- Indices de la tabla `problem_lists`
--
ALTER TABLE `problem_lists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `infrastructures`
--
ALTER TABLE `infrastructures`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `neighbors`
--
ALTER TABLE `neighbors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=195;

--
-- AUTO_INCREMENT de la tabla `pqrs`
--
ALTER TABLE `pqrs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `problem_lists`
--
ALTER TABLE `problem_lists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pqrs`
--
ALTER TABLE `pqrs`
  ADD CONSTRAINT `pqrs_infrastructure_id_foreign` FOREIGN KEY (`infrastructure_id`) REFERENCES `infrastructures` (`id`),
  ADD CONSTRAINT `pqrs_neighbor_id_foreign` FOREIGN KEY (`neighbor_id`) REFERENCES `neighbors` (`id`),
  ADD CONSTRAINT `pqrs_problem_id_foreign` FOREIGN KEY (`problem_id`) REFERENCES `problem_lists` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
