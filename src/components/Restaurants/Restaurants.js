import usePageData from '../../custom-hooks/usePageData';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Spinner from '../Spinner/Spinner';

const Restaurants = () => {
    const restaurantsList = usePageData('partners');
    return (
        <div className='restaurants__cards cards'>
            {restaurantsList 
                ? restaurantsList.map(restaurant => <RestaurantCard key={restaurant.image} {...restaurant} />)
                : <Spinner />
            }
            
        </div>
    );
};

export default Restaurants;