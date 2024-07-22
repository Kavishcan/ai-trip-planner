import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place.name,
    };
    const result = await GetPlaceDetails(data).then((res) => {
      console.log(res.data.places[0].photos[0].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.places[0].photos[9].name
      );

      setPhotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place.name}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl ? photoUrl : "/placeholder.png"}
          alt="placeholder"
          className="w-[130px] h-[130px] object-cover rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg">{place.name}</h2>
          <p className="text-sm text-gray-400">{place.details}</p>

          <h2 className="mt-2">💰 {place.ticket_pricing}</h2>
          {/* <Button size="sm" className="mt-2">
            <FaMapLocationDot />
          </Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
