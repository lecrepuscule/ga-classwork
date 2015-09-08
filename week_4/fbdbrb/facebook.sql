CREATE TABLE people(
  id SERIAL8 PRIMARY KEY,
  first VARCHAR(25) NOT NULL,
  last VARCHAR(25) NOT NULL,
  dob DATE CHECK (dob < '1 Jan 2002'),
  relationship VARCHAR(20),
  friends INT2 DEFAULT 0,
  city VARCHAR(20)
);