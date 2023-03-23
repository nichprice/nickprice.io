---
title: What is SQL?
date: 2022-07-13
---

Structured Query Language, SQL, Sequel, Squirrel (colloquially). You’ll see it written and hear it spoken many different ways throughout the industry, but what is it?

SQL is a coding language designed to communicate with databases. Think of any pre-1980s era piece of media. It’s likely that an image comes to mind of a secretary at a desk, with a filing cabinet full of paperwork. Often the same forms over and over again representing purchase orders, or client information, or monthly profit and loss statements. For a company, wouldn’t it be convenient to store all of that data into one spreadsheet? Wouldn’t it be great it you could then ask that spreadsheet questions about it’s contents in order to extract specific information? Yes and yes! That’s where a language like SQL comes in handy!

Back to our example of an overflowing file cabinet. In modern times, this filing cabinet represents a database. SQL can extract information from the database, but what kind of information can it extract? SQL has many many commands that can be used to query a database, but some of the most common and most important are these commands:

SELECT - extracts data from a database
UPDATE - updates data in a database
DELETE - deletes data from a database
INSERT INTO - inserts new data into a database
CREATE DATABASE - creates a new database
ALTER DATABASE - modifies a database
CREATE TABLE - creates a new table
ALTER TABLE - modifies a table
DROP TABLE - deletes a table
CREATE INDEX - creates an index (search key)
DROP INDEX - deletes an index
Let’s breakdown an example of a specific query.

W3 Schools provides a great simulator for SQL queries. In this example, we’re accessing a database that contains customer information. There are columns to the table, which are CustomerID, CustomerName, ContactName, Address, City, PostalCode, and Country. There are also 91 records in this spreadsheet (each representing a customer).

A decent amount of information to look at all at once… What if the company who’s data this is wanted to find where most of their customers came from? Likely an employee who’s familiar with the regions that the company does business in would only need the customers city in order to get a good idea of where their customers are located. Columns like Address, PostalCode, and ContactName are superfluous when it comes to this query.

Let’s use SQL to ask the database to return just the CustomerName, and the City. The line of code that we run is as follows:

    SELECT CustomerName,City FROM Customers;

This code is quite simple to read. In our table called Customers, let’s just look at our CustomerName and City for each row. And of course, this returns a table that has two columns, Customer and City. Now, our employee has a much more simple table that they can scan through and ask even more questions.

SQL is a very simple and very powerful language that pretty much anyone can benefit from learning. If you work in research, or marketing, or sales, learning SQL has capabilities that can make your job a whole lot easier, and in my opinion, very worth learning.
