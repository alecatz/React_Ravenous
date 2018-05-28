const apiKey = '
2d-QNwVTBJYYT3V5v2-_GtszlqgGUVQxzZJkcNK1HNkbqfZT5t9pFrnjv5J3GOvOHffTlFGw1EfhsQ0Jalqan-e-DIBZEaMF8w1Hkv0NLBX5LeWCY3YnCczA2H8MW3Yx';

const Yelp = {
  search(term,location,sortBy) {
    //business endpoint on Yelp API website + prepended CORS anywhere app wbsite (https://cors-anywhere.herokuapp.com/)
    //(without this, Ajax request to Yelp API would't work!)
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      }
    });
  };
};

export default Yelp;