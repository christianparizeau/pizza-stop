-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

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
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cartItems` (
  `cartItemId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`cartItemId`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (1,5,4,999),(2,6,4,999),(3,7,4,999),(4,9,4,999),(5,10,4,999),(6,11,4,999),(7,14,3,2900),(8,15,3,2900),(9,16,3,2900),(10,17,3,2900),(11,18,3,2900),(12,19,3,2900),(13,20,3,2900),(14,23,1,2999),(15,25,2,2595),(16,26,2,2595),(17,27,4,999),(18,28,4,999),(19,29,4,999),(20,29,4,999),(21,29,4,999),(22,29,5,9900),(23,29,2,2595),(24,29,2,2595),(25,29,4,999),(26,29,4,999),(27,29,4,999),(28,30,3,2900),(29,30,6,830),(30,30,6,830),(31,30,3,2900),(32,30,5,9900),(33,30,5,9900),(34,30,3,2900),(35,30,6,830),(36,30,6,830),(37,30,6,830),(38,30,6,830),(39,30,6,830),(40,30,6,830),(41,30,6,830),(42,30,6,830),(43,30,6,830),(44,30,6,830),(45,30,6,830),(46,30,6,830),(47,30,6,830),(48,30,6,830),(49,30,6,830),(50,30,6,830),(51,30,6,830),(52,30,6,830),(53,30,6,830),(54,30,6,830),(55,30,6,830),(56,30,6,830),(57,30,6,830),(58,30,6,830),(59,30,6,830),(60,30,6,830),(61,30,6,830),(62,30,6,830),(63,30,6,830),(64,31,3,2900),(65,30,5,9900),(66,30,2,2595),(67,30,5,9900),(68,30,5,9900),(69,30,5,9900),(70,30,3,2900),(71,30,3,2900),(72,30,3,2900),(73,30,1,2999),(74,30,6,830),(75,30,2,2595),(76,32,1,2999),(77,32,1,2999),(78,32,1,2999),(79,32,1,2999),(80,32,1,2999),(81,32,1,2999),(82,32,1,2999),(83,32,1,2999),(84,32,1,2999),(85,32,1,2999),(86,32,2,2595),(87,32,2,2595),(88,32,6,830),(89,32,6,830),(90,32,6,830),(91,33,2,2595),(92,33,3,2900),(93,33,6,830),(94,33,6,830),(95,33,6,830),(96,33,6,830),(97,33,6,830),(98,33,6,830),(99,33,6,830),(100,33,5,9900),(101,34,2,2595),(102,34,2,2595),(103,34,2,2595),(104,34,2,2595),(105,34,2,2595),(106,34,4,999),(107,34,4,999),(108,34,4,999),(109,34,4,999),(110,35,5,9900),(111,35,5,9900),(112,35,5,9900),(113,36,2,2595),(114,37,1,2999),(115,37,1,2999),(116,37,1,2999),(117,37,1,2999),(118,37,1,2999),(119,37,1,2999),(120,37,1,2999),(121,37,1,2999),(122,37,1,2999),(123,37,1,2999),(124,37,1,2999),(125,37,1,2999),(126,38,3,2900),(127,38,3,2900),(128,38,3,2900),(129,38,3,2900),(130,38,2,2595),(131,38,2,2595),(132,38,5,9900),(133,39,1,2999),(134,38,2,2595),(135,38,2,2595),(136,38,2,2595),(137,38,2,2595),(138,38,2,2595),(139,38,2,2595),(140,40,3,2900),(141,40,3,2900),(142,40,3,2900),(143,40,3,2900),(144,40,3,2900),(145,40,3,2900),(146,40,3,2900),(147,41,6,830),(148,41,6,830),(149,41,6,830),(150,41,3,2900),(151,41,3,2900),(152,41,3,2900),(153,41,3,2900),(154,41,3,2900),(155,41,3,2900),(156,41,3,2900),(157,41,3,2900),(158,41,3,2900),(159,41,3,2900),(160,41,3,2900),(161,41,3,2900),(162,42,1,2999),(163,42,1,2999),(164,42,1,2999),(165,42,2,2595),(166,42,2,2595),(167,43,6,830),(168,43,1,2999),(169,43,2,2595),(170,43,3,2900),(171,43,4,999);
/*!40000 ALTER TABLE `cartItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (1,'2019-11-20 20:25:33'),(2,'2019-11-20 20:26:52'),(3,'2019-11-20 20:30:19'),(4,'2019-11-20 20:30:50'),(5,'2019-11-20 20:43:23'),(6,'2019-11-20 20:47:18'),(7,'2019-11-20 20:48:04'),(8,'2019-11-20 20:48:16'),(9,'2019-11-20 20:49:21'),(10,'2019-11-20 20:49:44'),(11,'2019-11-20 20:56:06'),(12,'2019-11-20 20:56:09'),(13,'2019-11-20 20:57:37'),(14,'2019-11-20 20:57:40'),(15,'2019-11-20 20:58:11'),(16,'2019-11-20 21:00:06'),(17,'2019-11-20 21:00:40'),(18,'2019-11-20 21:01:00'),(19,'2019-11-20 21:04:25'),(20,'2019-11-20 21:05:01'),(21,'2019-11-20 21:06:46'),(22,'2019-11-20 21:07:15'),(23,'2019-11-20 21:08:05'),(24,'2019-11-20 21:08:09'),(25,'2019-11-20 21:10:38'),(26,'2019-11-20 21:16:12'),(27,'2019-11-20 22:40:53'),(28,'2019-11-20 23:38:39'),(29,'2019-11-20 23:45:56'),(30,'2019-11-21 01:46:31'),(31,'2019-11-21 23:25:23'),(32,'2019-11-22 01:28:13'),(33,'2019-11-22 01:33:45'),(34,'2019-11-22 01:59:07'),(35,'2019-11-22 17:55:31'),(36,'2019-11-22 18:04:47'),(37,'2019-11-22 18:22:59'),(38,'2019-12-16 22:31:56'),(39,'2019-12-17 00:36:25'),(40,'2019-12-17 00:41:51'),(41,'2019-12-18 19:29:59'),(42,'2019-12-18 19:36:27'),(43,'2019-12-18 20:10:36');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `creditCard` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (5,34,'Pzo','0000','123 Value Lane','2019-11-22 01:59:22'),(6,35,'Pzo','1352462','123 Value Lane','2019-11-22 17:55:45'),(7,36,'124','12435','2345 gyj','2019-11-22 18:05:48'),(8,38,'jyhrtef','325465768597','ujyherta 46','2019-12-17 00:39:11'),(9,41,'45635','323143254365','122e35465y4r','2019-12-18 20:10:29');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shake Weight',2999,'images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue eros quis arcu consequat, non suscipit dolor venenatis. Quisque id sollicitudin ex. Vivamus ut ligula augue. Duis mauris ex, congue sit amet scelerisque ac, efficitur a lectus. Nulla sed lectus ultricies dolor maximus scelerisque eu sed odio. Proin vestibulum sem vitae mi lobortis, non luctus nisl cursus. Etiam eget diam ut lectus molestie blandit. Maecenas pharetra, risus et accumsan maximus, nunc urna consectetur erat, in bibendum lectus elit in tellus. Nunc massa risus, eleifend ac fringilla a, tempor ut mi. Curabitur ultrices mattis mauris, quis ultrices augue pulvinar cursus. Duis magna orci, gravida quis laoreet sit amet, egestas sed diam.\r\n\r\nAenean tincidunt felis id nunc facilisis, et condimentum tortor mollis. Ut ornare sed ante vel facilisis. Duis nisl ex, porta et interdum vel, facilisis nec quam. Vestibulum vehicula interdum mauris. Donec sed placerat libero. Maecenas id sodales ipsum, id dapibus nisl. Cras eu efficitur lorem. Integer vitae aliquam mi. Nulla ut magna non tortor vestibulum cursus at vitae erat. Pellentesque a velit et quam scelerisque semper vitae sit amet turpis. Integer vestibulum condimentum dolor, id luctus metus consequat ac. Nam vitae lobortis dui, tempor venenatis risus. Donec elementum magna eu aliquet aliquam. Suspendisse potenti. Curabitur quam ex, accumsan at lorem eget, consequat ultricies leo.'),(2,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id magna at nulla interdum porttitor. Duis et ex nec metus molestie sagittis. Donec non ornare sem. Proin orci quam, eleifend et orci sit amet, aliquam interdum ligula. Suspendisse pellentesque imperdiet enim id tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vel est at est finibus egestas. Mauris quis euismod diam, mattis mollis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum, dolor eu tempor vestibulum, dui odio lacinia lorem, nec sollicitudin felis justo vel leo. Donec ex lectus, faucibus a dolor a, sodales sollicitudin lorem. Donec et dolor venenatis, bibendum mauris a, ornare enim. Nulla sed diam eu risus facilisis tincidunt ac quis magna. Cras et purus cursus, auctor metus nec, hendrerit nisi. Aenean ut enim pretium, euismod orci sed, viverra lacus.\r\n\r\nProin vel cursus nisi. Pellentesque commodo eu dolor id imperdiet. Cras ipsum dolor, feugiat vel ultricies vel, commodo dictum sapien. Sed sem ex, euismod id ex non, fermentum iaculis nisl. Integer posuere iaculis tempus. Praesent tincidunt purus ac nisl faucibus dignissim. Duis dignissim massa nisl, eu lacinia dolor aliquet non. Praesent eu lacus sit amet enim laoreet aliquet bibendum non lectus. Donec convallis, arcu fermentum finibus hendrerit, tellus metus feugiat dui, a commodo velit nibh sit amet nisl. Sed porttitor vestibulum sem, quis tempor nisi interdum commodo. Mauris aliquam lobortis massa ac luctus. Phasellus leo sapien, rutrum venenatis eros a, sodales pharetra velit. Nunc hendrerit leo congue efficitur vulputate.'),(3,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius ipsum eget ligula posuere, quis ullamcorper urna vehicula. Fusce placerat dapibus diam, in interdum enim scelerisque nec. Nam lectus erat, sollicitudin nec libero vitae, feugiat placerat tortor. Praesent dapibus tincidunt aliquam. Sed sagittis feugiat sapien. Nulla nec interdum dolor, vel feugiat lorem. Nullam finibus tempus sem, sed ullamcorper sem scelerisque et. Etiam eget velit finibus, fermentum orci at, porttitor magna. Etiam faucibus magna vel efficitur placerat. Curabitur sed nunc nisi. Suspendisse varius condimentum vulputate. Praesent sed tincidunt nibh. Donec eu elit finibus, sodales metus ac, scelerisque tortor. Nulla mauris nunc, porttitor et feugiat non, accumsan non est.\r\n\r\nNullam dapibus efficitur lectus non placerat. Vivamus lacinia erat erat, id porta dui finibus vitae. Morbi neque dolor, dapibus ut tempus eget, consequat a ipsum. Nulla volutpat, sapien ac ornare facilisis, odio quam convallis libero, at fermentum est augue a nunc. Nullam vitae dapibus massa. Nullam eu ex quis ante pulvinar pretium. Nullam condimentum eros consectetur leo venenatis, nec accumsan nunc maximus. Morbi dignissim odio ut nunc tempor euismod.'),(4,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum maximus arcu, a consectetur arcu iaculis ac. Vestibulum ex erat, faucibus ut hendrerit in, blandit eget ante. Vestibulum non consequat mi. Integer lorem risus, gravida egestas ex ut, tempor hendrerit turpis. Phasellus eu massa nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ultrices, sem porttitor gravida aliquam, diam nisi ultricies massa, vitae tincidunt sapien odio a lacus. Mauris vulputate tincidunt neque ac finibus. Curabitur feugiat ac mi vitae feugiat. Curabitur sit amet diam interdum, hendrerit leo sed, tincidunt diam.\r\n\r\nQuisque finibus ut libero quis hendrerit. In tincidunt sem in magna lacinia, vitae sodales quam venenatis. Sed vel vestibulum metus. Aliquam lacus neque, vulputate in libero eget, laoreet vestibulum erat. Fusce vel efficitur nibh. Sed a ex tortor. Vivamus ipsum nisi, blandit sed iaculis nec, consectetur in odio. Donec ut consectetur arcu. Fusce blandit eget velit sed pretium. Maecenas ex mi, gravida interdum pellentesque ac, euismod quis diam. Morbi quis ante nunc. Proin euismod ut nulla in tempor. Cras eu augue suscipit, blandit orci a, commodo ante. Nullam nibh eros, viverra a sem sed, cursus tincidunt ante.'),(5,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor purus lectus, sed rhoncus lorem semper et. Praesent dapibus augue ac ligula commodo, at aliquet nulla condimentum. Donec eu lorem vitae risus aliquet blandit. Donec lectus neque, congue ut consectetur vel, faucibus accumsan felis. Nullam viverra iaculis metus sed elementum. Donec varius ullamcorper augue, quis scelerisque est efficitur et. Donec mattis orci non viverra congue. Sed sed ligula mollis, gravida purus ac, imperdiet lacus.\r\n\r\nSed dignissim enim ac ornare tincidunt. Sed dapibus ullamcorper iaculis. Curabitur quis dui sit amet nisi egestas molestie. Vivamus et purus ac ipsum mollis facilisis. Ut aliquam posuere sollicitudin. Duis luctus augue placerat posuere imperdiet. Duis volutpat mollis sapien nec elementum. Duis vel molestie nibh. Etiam eu tempor mi. In aliquam tempor vehicula.'),(6,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','\r\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at porta lacus. Donec vel nibh rutrum, convallis lorem vel, faucibus nisl. Morbi quis nisi nisl. Duis laoreet sit amet erat vel dictum. Aliquam fringilla accumsan metus, quis pellentesque purus tincidunt a. Sed tincidunt pretium eros, vitae molestie nunc mollis et. Pellentesque quis diam et ipsum facilisis lacinia. Etiam non tempus eros. Nam venenatis ut dui eget vehicula. Donec et sem molestie, fringilla metus vel, congue risus. Mauris semper massa ut augue efficitur vestibulum. Nullam fermentum augue vel leo aliquet, at pulvinar odio luctus.\r\n\r\nNunc id magna viverra diam commodo condimentum ut quis turpis. Etiam ut tempus metus. Aliquam ac sem ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod dignissim arcu id rhoncus. Duis efficitur diam nisl, luctus efficitur arcu scelerisque maximus. Quisque in porta arcu. Integer pharetra commodo scelerisque.');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-18 21:15:18
