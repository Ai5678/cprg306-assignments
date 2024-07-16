"use client"
import {useEffect, useState} from "react";

export default function MealIdeas({ingredient}){
    const [meals, setMeals] = useState([]);

    // API fetching function
    async function fetchMealIdeas(ingredient){
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
            );
            if(!response.ok){
                console.log(`Error: ${response.statusText}`);
                return [];
            }
            const data = await response.json();
            return data.meals;
        }
        catch (error){
            console.log(`Error: ${error.message}`);
            return [];
        }
    }

    async function loadMealIdeas(){
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {
        if (ingredient){
            loadMealIdeas();
        }
    }, [ingredient]);

    return(
        <div>
            <h1 className="text-2xl font-semibold">Meal Ideas with {ingredient}</h1>
            <ul>
                {meals ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal}>
                                <h2>{meal.strMeal}</h2>
                                <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                        </li>
                    ))
                ) : (
                    <p>No meal ideas found for  {ingredient}.</p>
                )
            }
            </ul>
        </div>
    );
}