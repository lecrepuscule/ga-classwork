drop database campus;
create database campus;

create table students (
  id serial8 primary key,
  first varchar(25),
  last varchar(25),
  dob date,
  gpa float4
);

create table classes (
  id serial8 primary key,
  name varchar(50) unique not null 
);

--join table
create table schedules (
  id serial8 primary key,
  student_id int4 references students(id),
  class_id int4 references classes(id)
);