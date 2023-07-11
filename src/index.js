import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Slice of Life Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	const numPizzas = pizzaData.length;

	return (
		<main className="menu">
			<h2>Our menu</h2>

			{numPizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stone oven. All organic. All delicious.
					</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza
								key={pizza.name}
								pizza={pizza}
							/>
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later.</p>
			)}
		</main>
	);
}

function Pizza({ pizza }) {
	const { ingredients, name, photoName, price, soldOut } = pizza;

	return (
		<li className={`pizza${soldOut ? " sold-out" : ""}`}>
			<img
				src={photoName}
				alt={name}
			/>
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? "SOLD OUT" : price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openingHour = 12;
	const closingHour = 22;
	const isOpen = hour >= openingHour && hour <= closingHour;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closingHour={closingHour} />
			) : (
				<p>
					We're currently closed. We're happy to service you between
					{" " + openingHour}:00 and {closingHour}:00.
				</p>
			)}
		</footer>
	);
}

function Order({ closingHour }) {
	return (
		<div className="order">
			<p>We're open until {closingHour}:00. Visit us or order online.</p>
			<button className="btn">Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
