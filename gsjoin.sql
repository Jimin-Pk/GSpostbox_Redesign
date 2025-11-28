create table gsjoin(
    id varchar(7) not null,
    password varchar(12) not null,
    name varchar(10) not null,
    hp varchar(11) not null,
    email varchar(40),
    primary key(id)
)engine=innoDB charset=utf8;