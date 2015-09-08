drop table todo;
create table todo (
  id serial8 primary key,
  item varchar(255),
  notes text
);

insert into todo (item, notes) values ('sinatra', 'set up sinatra site for the todo list');