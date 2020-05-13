import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTired, faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import "../scss/Food.scss";
import getUserNumber from "../getUserNumber";
import getFoodName from "../getFoodName";

type FoodProps = {
  imageSrc: string;
  foodNumber: number;
};

const init = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  }
};

function Food({ imageSrc, foodNumber }: FoodProps) {
  // const food_no = imageSrc.split(".")[0].split("/")[2];
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [foodName, setFoodName] = useState<string>();
  const info = {
    userNumber: getUserNumber(),
    foodNumber,
  };

  const like = () => {
    fetch("/food/like", {
      ...init,
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("선호도 올림.");
      });
  };

  const dislike = () => {
    //DB 선호도 내리기
    fetch("/food/dislike", {
      ...init,
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("선호도 내림 ");
      });
  };

  useEffect(() => {
    getFoodName(foodNumber)
      .then(res => setFoodName(res))
      .catch(e => console.error(e));
  }, [foodNumber]);

  return (
    <div className="food-container">
      <div className="food">
        <div className="box">
          {mouseOver ? <p>{foodName}</p> : null}
          <img
            src={imageSrc}
            alt="foodImage"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
          />
          <div>
            <button className="like-button" onClick={like}>
              <FontAwesomeIcon
                size="2x"
                color="rgb(255, 202, 0)"
                icon={faGrinHearts}
              />
            </button>
            <button className="dislike-button" onClick={dislike}>
              <FontAwesomeIcon
                size="2x"
                color="rgb(255, 202, 0)"
                icon={faTired}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;
