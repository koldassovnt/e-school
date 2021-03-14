CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `age` int(3) NOT NULL,
  `gpa` double NOT NULL,
  PRIMARY KEY (`id`)
);


