-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: localhost    Database: stockexchange
-- ------------------------------------------------------
-- Server version	5.7.9-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company` (
  `company_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `boardof_directors` varchar(255) DEFAULT NULL,
  `brief_write_up` varchar(255) DEFAULT NULL,
  `ceo_name` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `is_company_blocked` bit(1) NOT NULL,
  `listed_in_stock_exchanges` bit(1) DEFAULT NULL,
  `stock_code` varchar(255) DEFAULT NULL,
  `turnover` bigint(20) NOT NULL,
  `sector` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `FKbvan8smq7yndgj8l32tuehcst` (`sector`),
  CONSTRAINT `FKbvan8smq7yndgj8l32tuehcst` FOREIGN KEY (`sector`) REFERENCES `sectors` (`sector_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Great People','asdasdas','Brian Lara','Company 2','\0','','COM2',50000000,2),(2,'Dummy','Big company','Dummy','Company 1','\0','','COM1',10000000,2),(3,'Dummy','asdadasd','Dummy','Company 3','\0','','COM3',4000000,4),(4,'Amit Wani','Great','Amit Wani','Company 4','\0','','COM4',100000000078878777,2),(5,'Abhishek','fjkl','Abhishek Sawant','Company 5','\0','','COM5',2122123123259,3),(6,'Saurav','fasdf','Saurav Kumar','Company 6','\0','','COM6',14564456456,1),(7,'Pushpak','ghsdfgsd','Pushpak Patil','Company 7','\0','','COM7',587456486256,2),(8,'Prateek','aghdfsg','Prateek Deshpande','Company 8','\0','','COM8',7565644545,3),(9,'Abhishek','fasdgdf','Abhishek Raj','Company 9','\0','','COM9',789789456,2),(10,'Dhaval','asdgf','Dhaval Tandale','Company 10','\0','','COM10',4545656142,2);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (426),(426),(426),(426);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ipodetails`
--

DROP TABLE IF EXISTS `ipodetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ipodetails` (
  `ipo_id` bigint(20) NOT NULL,
  `numberof_shares` int(11) NOT NULL,
  `price_per_share` double NOT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `company_name` bigint(20) DEFAULT NULL,
  `stock_exchange` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ipo_id`),
  KEY `FKsxdb70q42pts3cud3772g73xt` (`company_name`),
  KEY `FKk2gssh2n7xupn9a96qtpbwblr` (`stock_exchange`),
  CONSTRAINT `FKk2gssh2n7xupn9a96qtpbwblr` FOREIGN KEY (`stock_exchange`) REFERENCES `stock_exchange` (`stock_exchange_id`),
  CONSTRAINT `FKsxdb70q42pts3cud3772g73xt` FOREIGN KEY (`company_name`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ipodetails`
--

LOCK TABLES `ipodetails` WRITE;
/*!40000 ALTER TABLE `ipodetails` DISABLE KEYS */;
INSERT INTO `ipodetails` VALUES (1,250,65,'ikghjkgfyiy',1,1),(15,2500,25,'asdasd',1,2);
/*!40000 ALTER TABLE `ipodetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `ro_id` int(11) NOT NULL AUTO_INCREMENT,
  `ro_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sectors`
--

DROP TABLE IF EXISTS `sectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sectors` (
  `sector_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brief` varchar(255) DEFAULT NULL,
  `sector_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`sector_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sectors`
--

LOCK TABLES `sectors` WRITE;
/*!40000 ALTER TABLE `sectors` DISABLE KEYS */;
INSERT INTO `sectors` VALUES (1,'IT','IT'),(2,'Finance','Finance'),(3,'Automobiles','Automobiles'),(4,'Infra','Infra');
/*!40000 ALTER TABLE `sectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_exchange`
--

DROP TABLE IF EXISTS `stock_exchange`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_exchange` (
  `stock_exchange_id` bigint(20) NOT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `contact_address` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `stock_exchange_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stock_exchange_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_exchange`
--

LOCK TABLES `stock_exchange` WRITE;
/*!40000 ALTER TABLE `stock_exchange` DISABLE KEYS */;
INSERT INTO `stock_exchange` VALUES (1,'asawsd','Mumbai','sadasdas','BSE'),(2,'stock exchange','Mumbai','awesome','NSE'),(3,'exchange','New York','awesome','NASDAQ'),(14,'New York Stock Exchange','new York','bvfdbvdfbvdfbvdf','NYSE');
/*!40000 ALTER TABLE `stock_exchange` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock_price`
--

DROP TABLE IF EXISTS `stock_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock_price` (
  `stockprice_id` int(11) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `stock_exchange` varchar(255) DEFAULT NULL,
  `stock_price` double NOT NULL,
  PRIMARY KEY (`stockprice_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock_price`
--

LOCK TABLES `stock_price` WRITE;
/*!40000 ALTER TABLE `stock_price` DISABLE KEYS */;
INSERT INTO `stock_price` VALUES (52,'1','2019-12-08','BSE',356.23),(53,'1','2019-12-09','BSE',361.31),(54,'1','2019-12-10','BSE',358.12),(55,'1','2019-12-11','BSE',357.09),(56,'1','2019-12-12','BSE',353.62),(57,'1','2019-12-13','BSE',349.56),(58,'1','2019-12-14','BSE',351.43),(59,'1','2019-12-15','BSE',350.12),(60,'1','2019-12-16','BSE',345.91),(61,'2','2019-12-08','BSE',456.23),(62,'2','2019-12-09','BSE',466.23),(63,'2','2019-12-10','BSE',490),(64,'2','2019-12-11','BSE',500),(65,'2','2019-12-12','BSE',510),(66,'2','2019-12-13','BSE',505),(67,'2','2019-12-14','BSE',515),(68,'2','2019-12-15','BSE',525),(69,'2','2019-12-16','BSE',535),(70,'3','2019-12-08','BSE',351),(71,'3','2019-12-09','BSE',360),(72,'3','2019-12-10','BSE',340),(73,'3','2019-12-11','BSE',320),(74,'3','2019-12-12','BSE',350),(75,'3','2019-12-13','BSE',370),(76,'3','2019-12-14','BSE',400),(77,'3','2019-12-15','BSE',370),(78,'3','2019-12-16','BSE',351),(80,'4','2018-12-01','BSE',295),(81,'4','2018-12-02','BSE',303),(82,'4','2018-12-03','BSE',311),(83,'4','2018-12-04','BSE',319),(84,'4','2018-12-05','BSE',327),(85,'4','2018-12-06','BSE',335),(86,'4','2018-12-07','BSE',343),(87,'4','2019-12-08','BSE',344),(88,'4','2019-12-09','BSE',389),(89,'4','2019-12-10','BSE',322),(90,'4','2019-12-11','BSE',311),(91,'4','2019-12-12','BSE',302),(92,'4','2019-12-13','BSE',298),(93,'4','2019-12-14','BSE',325),(94,'4','2019-12-15','BSE',360),(95,'4','2019-12-16','BSE',368),(96,'4','2019-12-17','BSE',375),(97,'4','2019-12-18','BSE',356),(98,'4','2019-12-19','BSE',368),(99,'4','2019-12-20','BSE',380),(100,'4','2019-12-21','BSE',392),(101,'4','2019-12-22','BSE',404),(102,'4','2019-12-23','BSE',416),(103,'4','2019-12-24','BSE',428),(104,'4','2019-12-25','BSE',440),(105,'4','2019-12-26','BSE',452),(106,'4','2019-12-27','BSE',464),(107,'4','2019-12-28','BSE',476),(108,'4','2019-12-29','BSE',488),(109,'4','2019-12-30','BSE',500),(110,'4','2019-12-31','BSE',512),(183,'5','2019-12-01','BSE',256),(184,'5','2019-12-02','BSE',259),(185,'5','2019-12-03','BSE',245),(186,'5','2019-12-04','BSE',250),(187,'5','2019-12-05','BSE',256),(188,'5','2019-12-06','BSE',254),(189,'5','2019-12-07','BSE',266),(190,'5','2019-12-08','BSE',264),(191,'5','2019-12-09','BSE',265),(192,'5','2019-12-10','BSE',245),(193,'5','2019-12-11','BSE',250),(194,'5','2019-12-12','BSE',256),(195,'5','2019-12-13','BSE',254),(196,'5','2019-12-14','BSE',266),(197,'5','2019-12-15','BSE',264),(198,'5','2019-12-16','BSE',265),(199,'5','2019-12-17','BSE',264),(200,'5','2019-12-18','BSE',265),(201,'5','2019-12-19','BSE',245),(202,'5','2019-12-20','BSE',250),(203,'5','2019-12-21','BSE',256),(204,'5','2019-12-22','BSE',254),(205,'5','2019-12-23','BSE',266),(206,'5','2019-12-24','BSE',264),(207,'5','2019-12-25','BSE',265),(208,'5','2019-12-26','BSE',256),(209,'5','2019-12-27','BSE',254),(210,'5','2019-12-28','BSE',266),(211,'5','2019-12-29','BSE',264),(212,'5','2019-12-30','BSE',265),(213,'6','2019-12-01','NSE',351),(214,'6','2019-12-02','NSE',348),(215,'6','2019-12-03','NSE',338),(216,'6','2019-12-04','NSE',328),(217,'6','2019-12-05','NSE',318),(218,'6','2019-12-06','NSE',308),(219,'6','2019-12-07','NSE',311),(220,'6','2019-12-08','NSE',314),(221,'6','2019-12-09','NSE',317),(222,'6','2019-12-10','NSE',320),(223,'6','2019-12-11','NSE',323),(224,'6','2019-12-12','NSE',326),(225,'6','2019-12-13','NSE',329),(226,'6','2019-12-14','NSE',332),(227,'6','2019-12-15','NSE',335),(228,'6','2019-12-16','NSE',338),(229,'6','2019-12-17','NSE',341),(230,'6','2019-12-18','NSE',344),(231,'6','2019-12-19','NSE',347),(232,'6','2019-12-20','NSE',350),(233,'6','2019-12-21','NSE',353),(234,'6','2019-12-22','NSE',356),(235,'6','2019-12-23','NSE',359),(236,'6','2019-12-24','NSE',362),(237,'6','2019-12-25','NSE',365),(238,'6','2019-12-26','NSE',368),(239,'6','2019-12-27','NSE',371),(240,'6','2019-12-28','NSE',374),(241,'6','2019-12-29','NSE',377),(242,'6','2019-12-30','NSE',380),(243,'6','2019-12-31','NSE',383),(305,'9','2019-12-01','NSE',286),(306,'9','2019-12-02','NSE',289),(307,'9','2019-12-03','NSE',275),(308,'9','2019-12-04','NSE',260),(309,'9','2019-12-05','NSE',259),(310,'9','2019-12-06','NSE',264),(311,'9','2019-12-07','NSE',266),(312,'9','2019-12-08','NSE',264),(313,'9','2019-12-09','NSE',265),(314,'9','2019-12-10','NSE',275),(315,'9','2019-12-11','NSE',280),(316,'9','2019-12-12','NSE',256),(317,'9','2019-12-13','NSE',244),(318,'9','2019-12-14','NSE',269),(319,'9','2019-12-15','NSE',264),(320,'9','2019-12-16','NSE',265),(321,'9','2019-12-17','NSE',264),(322,'9','2019-12-18','NSE',265),(323,'9','2019-12-19','NSE',245),(324,'9','2019-12-20','NSE',250),(325,'9','2019-12-21','NSE',256),(326,'9','2019-12-22','NSE',254),(327,'9','2019-12-23','NSE',266),(328,'9','2019-12-24','NSE',264),(329,'9','2019-12-25','NSE',265),(330,'9','2019-12-26','NSE',256),(331,'9','2019-12-27','NSE',254),(332,'9','2019-12-28','NSE',266),(333,'9','2019-12-29','NSE',264),(334,'9','2019-12-30','NSE',265),(335,'10','2019-12-01','NSE',286),(336,'10','2019-12-02','NSE',289),(337,'10','2019-12-03','NSE',275),(338,'10','2019-12-04','NSE',260),(339,'10','2019-12-05','NSE',259),(340,'10','2019-12-06','NSE',264),(341,'10','2019-12-07','NSE',266),(342,'10','2019-12-08','NSE',264),(343,'10','2019-12-09','NSE',265),(344,'10','2019-12-10','NSE',275),(345,'10','2019-12-11','NSE',280),(346,'10','2019-12-12','NSE',256),(347,'10','2019-12-13','NSE',244),(348,'10','2019-12-14','NSE',269),(349,'10','2019-12-15','NSE',286),(350,'10','2019-12-16','NSE',289),(351,'10','2019-12-17','NSE',275),(352,'10','2019-12-18','NSE',265),(353,'10','2019-12-19','NSE',265),(354,'10','2019-12-20','NSE',275),(355,'10','2019-12-21','NSE',280),(356,'10','2019-12-22','NSE',254),(357,'10','2019-12-23','NSE',266),(358,'10','2019-12-24','NSE',264),(359,'10','2019-12-25','NSE',265),(360,'10','2019-12-26','NSE',256),(361,'10','2019-12-27','NSE',254),(362,'10','2019-12-28','NSE',266),(363,'10','2019-12-29','NSE',264),(364,'10','2019-12-30','NSE',265),(365,'7','2019-12-01','NSE',9247),(366,'7','2019-12-02','NSE',9156),(367,'7','2019-12-03','NSE',9456),(368,'7','2019-12-04','NSE',9019),(369,'7','2019-12-05','NSE',9356),(370,'7','2019-12-06','NSE',9252),(371,'7','2019-12-07','NSE',9154),(372,'7','2019-12-08','NSE',9254),(373,'7','2019-12-09','NSE',9247),(374,'7','2019-12-10','NSE',9156),(375,'7','2019-12-11','NSE',9456),(376,'7','2019-12-12','NSE',9019),(377,'7','2019-12-13','NSE',9356),(378,'7','2019-12-14','NSE',9252),(379,'7','2019-12-15','NSE',9154),(380,'7','2019-12-16','NSE',9254),(381,'7','2019-12-17','NSE',9247),(382,'7','2019-12-18','NSE',9156),(383,'7','2019-12-19','NSE',9456),(384,'7','2019-12-20','NSE',9019),(385,'7','2019-12-21','NSE',9356),(386,'7','2019-12-22','NSE',9252),(387,'7','2019-12-23','NSE',9154),(388,'7','2019-12-24','NSE',9254),(389,'7','2019-12-25','NSE',9247),(390,'7','2019-12-26','NSE',9156),(391,'7','2019-12-27','NSE',9456),(392,'7','2019-12-28','NSE',9019),(393,'7','2019-12-29','NSE',9356),(394,'7','2019-12-30','NSE',9252),(395,'8','2019-12-01','NSE',335),(396,'8','2019-12-02','NSE',338),(397,'8','2019-12-03','NSE',341),(398,'8','2019-12-04','NSE',344),(399,'8','2019-12-05','NSE',347),(400,'8','2019-12-06','NSE',350),(401,'8','2019-12-07','NSE',353),(402,'8','2019-12-08','NSE',356),(403,'8','2019-12-09','NSE',359),(404,'8','2019-12-10','NSE',362),(405,'8','2019-12-11','NSE',365),(406,'8','2019-12-12','NSE',368),(407,'8','2019-12-13','NSE',371),(408,'8','2019-12-14','NSE',374),(409,'8','2019-12-15','NSE',377),(410,'8','2019-12-16','NSE',380),(411,'8','2019-12-17','NSE',383),(412,'8','2019-12-18','NSE',386),(413,'8','2019-12-19','NSE',389),(414,'8','2019-12-20','NSE',392),(415,'8','2019-12-21','NSE',395),(416,'8','2019-12-22','NSE',398),(417,'8','2019-12-23','NSE',401),(418,'8','2019-12-24','NSE',404),(419,'8','2019-12-25','NSE',407),(420,'8','2019-12-26','NSE',410),(421,'8','2019-12-27','NSE',413),(422,'8','2019-12-28','NSE',416),(423,'8','2019-12-29','NSE',419),(424,'8','2019-12-30','NSE',422),(425,'8','2019-12-31','NSE',425);
/*!40000 ALTER TABLE `stock_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `ur_us_id` bigint(20) NOT NULL,
  `ur_ro_id` int(11) NOT NULL,
  PRIMARY KEY (`ur_us_id`,`ur_ro_id`),
  KEY `FKjia4161ecu6h4p0egc2oc04lt` (`ur_ro_id`),
  CONSTRAINT `FKey5dviu01003a0149d6sxvpnx` FOREIGN KEY (`ur_us_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `FKjia4161ecu6h4p0egc2oc04lt` FOREIGN KEY (`ur_ro_id`) REFERENCES `role` (`ro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (0,1),(4,2);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `confirmed` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'','admin','1234','$2a$10$r1UU77TCgzlcqAdfDjv.LOXnsqR8fRSdFhaBfr2k0fAqWmmzzAmQK','admin@admin.com'),(4,'','sawant.14101997@gmail.com','1234567891','$2a$10$bBt.9aqAk43zCmAGh1yMf.bDyNab0wMECf3GlOt5JOONmZjhkiCui','sabhi');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-21 11:44:39
