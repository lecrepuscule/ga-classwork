drop table movies;
create table movies (
  id serial8 primary key,
  title varchar(1000),
  poster text,
  year varchar(4),
  released varchar(25),
  runtime varchar(25),
  genre varchar(100),
  director varchar(100),
  writers varchar(200),
  actors varchar(200),
  plot text
);