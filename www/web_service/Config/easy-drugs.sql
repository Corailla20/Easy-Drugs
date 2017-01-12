-- phpMyAdmin SQL Dump
-- version 4.6.5.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 12, 2017 at 10:35 AM
-- Server version: 10.1.18-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);
--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);
--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);
--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);
--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);
--
-- Database: `id472023_easydrugs`
--
CREATE DATABASE IF NOT EXISTS `id472023_easydrugs` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `id472023_easydrugs`;

-- --------------------------------------------------------

--
-- Table structure for table `DRUG`
--

CREATE TABLE `DRUG` (
  `id` int(30) NOT NULL,
  `title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sub_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `bar_code` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `flash_code` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `DRUG`
--

INSERT INTO `DRUG` (`id`, `title`, `sub_name`, `bar_code`, `flash_code`) VALUES
(1, 'Ixprim', 'Ixprim 37,5 mg/325 mg Comprimé pelliculé', '3585739', ''),
(3, 'Prednisolone', 'Prednisolone Mylan 20 mg, 20 comprimés orodispersibles', '3400939103464', '010340093910346417'),
(4, 'Acétylcystéine', 'Acétycystéine Mylan 200 mg, 20 sachets-dose de 3g', '3400936463233', '0103400936463233'),
(5, 'Spifen', 'Spifen 200 mg boîte de 30 comprimés', '3400936081918', ''),
(6, 'Doliprane', 'Doliprane 1000 mg boîte de 8 sachets-doses', '3624698', ''),
(10, 'Exomuc', 'Exomuc Sans sucre - Gout orange - 24 sachets', '0', '010340093638513917'),
(7, 'Maxilase', 'Maxilase Maux de gorge, 30 comprimés enrobés', '3477889', '010340093477889617'),
(8, 'Vogalib', 'Vogalib 7,5mg sans sucre, édulcoré à l\\\'aspartam métopimazine', '3400936348288', '010340093634828817'),
(9, 'Doliprane', 'Doliprane 1000mg, 8 gélules', '0', '010340094153396917'),
(14, 'Cantalène', 'Cantalène Maux de gorge et affections buccales - 24 comprimés à sucer', '', '010340093322158417'),
(15, 'Amoxyciline', 'Amoxyciline Mylan 1g -  6 comprimés dispersibles', '', '010340093568451617'),
(16, 'Mercurochrome', 'Mercurochrome Alcool modifié 70% vol. 200ml', '3160920503306', ''),
(17, 'Biseptine', 'Biseptine - Solution antiseptique 100ml', '', '010340093291328217'),
(18, 'Primoplast', 'Primoplast -  Gaze hydrophile, 30 compresses stériles', '', '564700301937'),
(19, 'Hexomedine', 'Hexomedine 45ml voie cutanée', '', '010340093049567417'),
(21, 'Betneval 0,1%', 'Valerate de betamethasone', '', '010340093247333517'),
(24, 'Revamil', 'Beaume cicatrisant au miel', '', '717438010243'),
(26, 'Oralair', 'Oralair 300 IR -  Comprimés sublinguaux', '', '010340093689522517'),
(27, 'Lévocétirizine', 'Lévocétirizine Mylan 5mg -  28 comprimés pelliculés', '', '010340093985692617'),
(28, 'Acide fusidique', 'Acide fusidique BGR 2% crème -  Tube de 15mg', '', '010340094965651617'),
(29, 'Hexaspray', 'Hexaspray maux de gorge- Flacon pressurisé de 30g', '', '010340093277972717'),
(30, 'Spifen', 'Spifen 400mg - 20 comprimés pelliculés', '', '010340093625137317'),
(31, 'Alprazolam', 'Alprazolam Mylan 0,25mg - 30 comprimés sécables', '', '010340093483766117'),
(32, 'Doliprane', 'Doliprane 1000mg - 8 comprimés', '', '010340093595583817'),
(33, 'Thiocolchicoside', 'Thiocolchicoside Mylan 4mg - 24 comprimés', '', '010340093588264617'),
(34, 'Oméprazole', 'Oméprazole Mylan 10mg - 14 gélules gastro-résistantes', '', '010340093686268517');

-- --------------------------------------------------------

--
-- Table structure for table `DRUG_USER`
--

CREATE TABLE `DRUG_USER` (
  `id_user` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `login` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `RECOMMENDATION`
--

CREATE TABLE `RECOMMENDATION` (
  `id_recommendation` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `id_drug` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `RECOMMENDATION`
--

INSERT INTO `RECOMMENDATION` (`id_recommendation`, `type`, `id_drug`) VALUES
('rec00001', 'Réservée à l\'adulte et à l\'enfant de plus de 50 kg (environ 15 ans).', '3624698'),
('rec00002', 'Réservéé à l\'adulte et à l\'enfant de plus de 20 kg (soit environ 6 ans).', '3400936081918');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `DRUG`
--
ALTER TABLE `DRUG`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sub_name` (`sub_name`),
  ADD KEY `sub_name_2` (`sub_name`);

--
-- Indexes for table `DRUG_USER`
--
ALTER TABLE `DRUG_USER`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `RECOMMENDATION`
--
ALTER TABLE `RECOMMENDATION`
  ADD PRIMARY KEY (`id_recommendation`),
  ADD KEY `id_drug` (`id_drug`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
