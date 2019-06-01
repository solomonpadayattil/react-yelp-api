const apiKey ='p_bAMtknb5cBBT4G4FX7AS82igiUDYyp_ACUnWVefWx8No2oZgo6sn8fo6bv_gLlxYLQb5qQj3jq9quRcxPJM0eJXBxe-mjHAiPi8M8z2Fn0hDFZZGhX4Mu6IAflXHYx';

const Yelp ={
search(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
        headers:{
            Authorization:`Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
      }).then((jsonResponse)=>{
          if(jsonResponse.businesses){
              return jsonResponse.businesses.map(business =>{
                  return {
                      id: business.id,
                      imageSrc:business.image_url,
                      name:business.name,
                      address:business.location.address1,
                      city:business.location.city,
                      state:business.location.zip_code,
                      category:business.categories[0].title,
                      rating:business.rating,
                      reviewCount:business.review_count,
                  };
              })
          }
      })
}
};

export default Yelp;