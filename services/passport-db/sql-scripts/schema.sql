# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.3.9-MariaDB)
# Database: passport
# Generation Time: 2019-04-18 05:15:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table applications
# ------------------------------------------------------------

DROP TABLE IF EXISTS `applications`;

CREATE TABLE `applications` (
  `id` varchar(191) DEFAULT NULL,
  `name` varchar(191) DEFAULT NULL,
  `clientId` varchar(191) DEFAULT NULL,
  `clientSecret` varchar(191) DEFAULT NULL,
  `privacyPolicyUrl` varchar(191) DEFAULT NULL,
  `termsOfServiceUrl` varchar(191) DEFAULT NULL,
  `supportEmail` varchar(191) DEFAULT NULL,
  `brandImageUrl` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `applications` WRITE;
/*!40000 ALTER TABLE `applications` DISABLE KEYS */;

INSERT INTO `applications` (`id`, `name`, `clientId`, `clientSecret`, `privacyPolicyUrl`, `termsOfServiceUrl`, `supportEmail`, `brandImageUrl`, `createdAt`)
VALUES
	('appUPnISHngGtASfu','Sublayer Passport',NULL,'secBy8QD3pagqW412','https://en.wikipedia.org/wiki/Privacy_policy','https://en.wikipedia.org/wiki/Terms_of_service','info@sublayer.io',X'68747470733A2F2F757365722D696D616765732E67697468756275736572636F6E74656E742E636F6D2F34343934373239342F35353636373538382D34393462396630302D353838382D313165392D383734352D3635656331393737313134642E706E67',NULL);

/*!40000 ALTER TABLE `applications` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table authorizations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `authorizations`;

CREATE TABLE `authorizations` (
  `applicationId` varchar(191) NOT NULL DEFAULT '',
  `userId` varchar(191) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`applicationId`,`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `authorizations` WRITE;
/*!40000 ALTER TABLE `authorizations` DISABLE KEYS */;

INSERT INTO `authorizations` (`applicationId`, `userId`, `createdAt`)
VALUES
	('appUPnISHngGtASfu','usrEIzFOQK8OsYFwJ','2019-04-14 05:10:30');

/*!40000 ALTER TABLE `authorizations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table collaborators
# ------------------------------------------------------------

DROP TABLE IF EXISTS `collaborators`;

CREATE TABLE `collaborators` (
  `applicationId` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`applicationId`,`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `collaborators` WRITE;
/*!40000 ALTER TABLE `collaborators` DISABLE KEYS */;

INSERT INTO `collaborators` (`applicationId`, `userId`, `createdAt`)
VALUES
	('appUPnISHngGtASfu','usrEIzFOQK8OsYFwJ','2019-04-14 06:08:17');

/*!40000 ALTER TABLE `collaborators` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sessions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `lastUsedAt` datetime DEFAULT NULL,
  `userId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activeId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browserName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browserVersion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browserOs` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browserFullVersion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `applicationId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registrationId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `used` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;

INSERT INTO `sessions` (`id`, `name`, `token`, `createdAt`, `lastUsedAt`, `userId`, `activeId`, `browserName`, `browserVersion`, `browserOs`, `browserFullVersion`, `applicationId`, `registrationId`, `used`)
VALUES
	('seszRcoJ9SGiaGmTd','Website (Chrome)','tokDhfBzGlsYrOikz','2019-04-14 11:05:58','2019-04-14 11:05:58','usrEIzFOQK8OsYFwJ','YES','Chrome','73','OS X','73.0.3683.103','appr4zzv0QGnwsFFr','regId3rPU0SPp40ZH',0);

/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `firstName` varchar(191) DEFAULT NULL,
  `lastName` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `createdAt`)
VALUES
	('usrEIzFOQK8OsYFwJ','Olivier','Andriessen','info@sublayer.io','2019-02-01 20:15:52');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
