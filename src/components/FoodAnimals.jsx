


export const FoodAnimals = ({ foods }) => {

    return(
        <ul>
            {foods.map(food => (
                <li key={food.id}>{food.name}</li>
            ))}
        
        </ul>
    )
}