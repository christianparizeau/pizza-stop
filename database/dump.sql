-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

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
  `quantity` smallint(6) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cartItemId`),
  UNIQUE KEY `cartId` (`cartId`,`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=392 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cartItems`
--

LOCK TABLES `cartItems` WRITE;
/*!40000 ALTER TABLE `cartItems` DISABLE KEYS */;
INSERT INTO `cartItems` VALUES (228,50,1,900,2,'2020-02-05 20:59:52'),(241,50,6,3500,4,'2020-02-05 21:01:15'),(328,50,3,4900,2,'2020-02-05 22:08:04'),(335,51,2,4400,5,'2020-02-06 20:12:13'),(346,51,5,14700,3,'2020-02-06 20:16:37'),(351,51,6,3500,9,'2020-02-06 20:21:30'),(360,51,1,900,1,'2020-02-06 20:25:52'),(361,52,2,4400,3,'2020-02-10 00:13:10'),(362,52,5,14700,2,'2020-02-10 00:13:15'),(363,52,6,3500,1,'2020-02-10 00:13:18'),(370,53,1,900,1,'2020-02-12 22:59:43'),(371,54,1,900,1,'2020-02-12 23:03:42'),(372,1,4,1200,10,'2020-03-06 19:34:22'),(376,1,3,4900,4,'2020-03-06 20:13:00'),(383,72,4,1200,8,'2020-03-09 22:05:19'),(391,72,3,4900,11,'2020-03-09 23:00:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (72,'2020-03-09 22:04:43'),(73,'2020-03-09 22:07:23'),(74,'2020-03-09 22:08:01'),(75,'2020-03-09 22:08:42'),(76,'2020-03-09 22:09:10'),(77,'2020-03-09 22:10:17'),(78,'2020-03-09 22:11:29'),(79,'2020-03-09 22:14:39'),(80,'2020-03-09 22:14:54'),(81,'2020-03-09 22:15:40'),(82,'2020-03-09 22:16:57'),(83,'2020-03-09 22:18:37'),(84,'2020-03-09 22:19:56'),(85,'2020-03-09 22:20:08'),(86,'2020-03-09 22:20:32'),(87,'2020-03-09 22:23:10'),(88,'2020-03-09 22:44:25'),(89,'2020-03-09 22:47:20'),(90,'2020-03-09 22:51:01'),(91,'2020-03-09 22:51:48');
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
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
INSERT INTO `products` VALUES (1,'Pizza Wheel',900,'/images/cutter.jpg','Cut your pizza to size with this sharp and durable pizza wheel.','Slice through mushrooms, pepperoni, and extra cheese with ease with this pizza wheel. Its sharp stainless steel blade cuts through crunchy crust, and is large enough to accommodate Sicilian and thick-crust pizzas. A die cast zinc thumb guard keeps fingers away from the blade for added safety, and the large, soft handle absorbs pressure.\r\n\r\nYou can rely on this wheel to make a complete cut through your pizza pie on the first run, thanks to its beveled stainless-steel blade. It works equally well with other pie doughs, and you can use without fear of cutting yourself, thanks to its built-in thumb guard.'),(2,'Kneading Surface',4400,'/images/kneading.jpg','Knead and size your dough on this surface that is easy to clean and store.','This food grade thickened and enlarged Silicone Pastry Mat can give you a good food journey. After use, it is easy to clean and save.\r\nYou will enjoy it very much in the process.\r\n\r\nIT\'S ABSOLUTELY THE BEST BANG FOR YOUR BUCK!'),(3,'Ceramic Pizza Stone',4900,'/images/stone.jpg','Get that restaurant quality crust at home on the grill or in the oven!','Cook Homemade Pizza Like a Chef and Amaze Your Family and Friends！\r\n\r\nInstead of spending money at the local pizza joint, more and more people would like to make fresh pizzas at home. You\'ll save money, calories and get lots of fun!\r\n\r\nThough pizza pan can appear in steel or other materials, only cordierite pizza stones work properly to cook a crisp and delicious pizza. Cordierite pizza stone is built to outlast all others, absorbs and retains heat evenly and eliminates excess moisture in the pizza dough to create a superbly crisp crust. This pizza stone can be used in outdoor grill and home oven. This stone is convenient for cooking homemade pizza and frozen pizza. In addition to pizza, the stone can be used to make breads, cookies, biscuits and more.'),(4,'Stainless Steel Cheese Grater',1200,'/images/grater.jpg','Shred, grate, or slice. This grater has what it takes to get the job done.','A top-rated professional-grade stainless steel cheese grater is an item to keep in your kitchen that assists immensely in shredding a wide variety of edibles. whether its cheddar, mozzarella, Camembert, feta or any other type. Make amazing pizzas, salads, pasta, and many other dishes with the grated cheese. Not only limited to grating cheese but also great for shredding vegetables like cabbage, cucumber, carrot, Welsh rarebit, lemon or orange peel, and other food items.\r\n\r\nThe single handle design fits comfortably in your hand for a splendid grating experience and allows for quick and efficient shredding. Its rubber handle fits comfortably in all hands. Just rest the base of the grater against a plate and grip the comfortable top handle for fast, high-volume and immediate shredding. So with this grater in use, shred with much more safety, speed, and precision.\r\n\r\nIt is a very handy tool to work with as it is highly efficient in performance and very easy to clean as well. You can place it in your dishwasher for hassle-free cleaning. However, it’s recommended to hand wash it using dish soap.\r\n\r\nComprising of 6 types of grating textures, listed are some of the ways Utopia’s Grater can be used for:\r\n\r\nSLICER: to grate vegetables and medium-sized cheese\r\n\r\nCOARSE: used to shred firm vegetables, hard and medium cheese, chocolate and ginger\r\n\r\nFINE: can be used for nutmeg, Parmesan, garlic, citrus, and lemon zest\r\n\r\nULTRA COARSE: this side can be used for softer cheese like Cheddar and Edam, vegetables like rosti and fritters\r\n\r\nMEDIUM SHAVER: for Parmesan, chocolate and small vegetable ribbons for salad\r\n\r\nSTAR: for small fluffy granules of Parmesan and chocolate\r\n\r\nThis is best for all your grating needs!'),(5,'Indoor Herb Garden',14700,'/images/herb-garden.jpg','Impress with homegrown herbs that add the final touch to any dish!','This indoor herb garden is a simple, beautifully designed garden, versatile enough to fit almost anywhere, but perfect for the best room in the house… your kitchen. It’s no secret homegrown veggies just taste better, and the Harvest Elite will inspire you to discover the flavor of fresh no matter the season. Perfect for beginners and experienced growers alike, it has room for six different plants. Grow an endless variety of herbs, vegetables, salad greens, or flowers to enhance your food, drinks, home and life. With just a little counter space, the included non GMO seed pod kit, and your own creativity, you’ll be enjoying the delicious taste that only comes from homegrown herbs and veggies in no time. It’s the perfect complement to any kitchen. Just fill the garden with water, drop in the pre seeded pods, and add a little bit of our all natural liquid plant food. Specially tuned, full spectrum LEDs mimic the optimum effects of sunlight. Your plants will naturally grow faster and there’s no pesticides or herbicides needed, and no soil required. Built in sensors automatically turn the lights on and off each day, and let you know when to feed and add water – so there’s no more guesswork. It’s truly that easy.'),(6,'Digital Scale',3500,'/images/scale.jpg','Measure with confidence with this high quality digital scale.','This is the perfect scale which includes a removable Protective LCD Display Cover (as well as three Soft Protective LCD Display Covers) which helps protect against many weighing messes such as recipes, candle-making, spills and more!\r\n\r\nNot many scales in its class can match up to its cutting edge feature; the new Baker’s Math/Percentage Weighing function. This has been a long-standing way for bakers to weigh their ingredients in proportion to their main ingredient (flour). This feature is the preferred method for bakers for the simple fact that it eliminates messy math that comes with weighing in teaspoons, cups, etc. – instead you deal with just percentage.\r\n\r\nAlso, measuring this way allows for you to make as little or as much as you want easier. Now that’s the easiest weigh to go about baking, isn’t it? This is a MUST-HAVE for any aspiring or professional baker!');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('Bab1kr78O5yeU0ZzLUT3J-OC8l9WNKRd',1583881885,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"cartId\":72}'),('XaUD7W9Wmd7qWDQcRfqJRTEu94X6eHAi',1583614081,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-12 11:04:59
