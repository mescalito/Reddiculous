import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ArrowRightSvg from "../assets/ArrowRightSvg";

function GalleryCard(props) {
  const [currIndex, SetCurrIndex] = useState(0);
  const [imageZoomed, SetImageZoomed] = useState(false);

  const transitionStyle = "300ms cubic-bezier(0.4, 0, 0.2, 1)";
  const [transitionState, SetTransition] = useState(true);
  const [tranlateState, SetTranslateState] = useState(false);

  useEffect(() => {
    // console.log(props.data[props.items[currIndex].media_id]);
  }, []);
  // e
  // :
  // "AnimatedImage"
  // id
  // :
  // "9wxpzeoacfgb1"
  // m
  // :
  // "image/gif"

  function handleImage(item) {
    if (props.data[item.media_id].status == "valid") {
      if (props.data[item.media_id].m.includes("gif")) {
        return props.data[item.media_id].s.gif;
      } else {
        const filter = props.data[item.media_id].p.filter(
          (element) => element.y > 400 || element.x > 400
        );
        if (filter.length > 0) {
          return filter[0].u.replaceAll("amp;", "");
        } else {
          return props.data[item.media_id].s.u?.replaceAll("amp;", "");
        }
      }
    } else {
      return "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1645192956.png?crop=1.00xw:1.00xh;0,0&resize=640:*";
    }
  }

  function handleSourceImg(item) {
    if (props.data[item.media_id].status == "valid") {
      if (props.data[item.media_id].m.includes("gif")) {
        return props.data[item.media_id].s.gif;
      } else {
        return props.data[item.media_id].s.u?.replaceAll("amp;", "");
      }
    } else {
      return "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1645192956.png?crop=1.00xw:1.00xh;0,0&resize=640:*";
    }
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <ImageCard
        SetImageZoomed={SetImageZoomed}
        src={
          handleSourceImg(props.items[currIndex])
          // props.data[props.items[currIndex].media_id].status === "valid"
          //   ? props.data[props.items[currIndex].media_id].s.u?.replaceAll(
          //       "amp;",
          //       ""
          //     )
          //   : "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1645192956.png?crop=1.00xw:1.00xh;0,0&resize=640:*"
        }
      />
      <div className="carousel-nav">
        {props.items.map((item, index) => {
          return (
            <span key={index}>
              {currIndex == index
                ? String.fromCharCode(10022)
                : String.fromCharCode(10023)}
            </span>
          );
        })}
      </div>
      <button
        className="arrow right-arrow"
        onClick={() =>
          (currIndex < props.items.length - 1 &&
            SetCurrIndex((currIndex) => currIndex + 1)) ||
          (currIndex == props.items.length - 1 && SetCurrIndex(0))
        }
      >
        <div style={{ width: "40px", height: "40px" }}>
          <ArrowRightSvg />
        </div>
      </button>
      <button
        className="arrow left-arrow"
        onClick={() =>
          (currIndex > 0 && SetCurrIndex((currIndex) => currIndex - 1)) ||
          (currIndex == 0 && SetCurrIndex(props.items.length - 1))
        }
      >
        <div style={{ width: "40px", height: "40px" }}>
          <ArrowRightSvg />
        </div>
      </button>
      <div
        className="carousel-translate"
        style={{
          transform: `${
            !tranlateState ? `translateX(${-100 * currIndex}%)` : ""
          }`,
          transition: transitionState ? transitionStyle : "",
        }}
      >
        {props.items.map((item, index) => {
          return (
            <div key={index} className="carousel">
              <ImageCard
                SetImageZoomed={SetImageZoomed}
                preview={
                  handleImage(item)
                  //   props.data[item.media_id].status == "valid"
                  //     ? (props.data[item.media_id].p &&
                  //         props.data[item.media_id].p[
                  //           props.data[item.media_id].p.length > 3
                  //             ? 3
                  //             : props.data[item.media_id].p.length - 1
                  //         ]?.u.replaceAll("amp;", "")) ||
                  //       (props.data[item.media_id].s.gif &&
                  //         props.data[item.media_id].s.gif) ||
                  //       (props.data[item.media_id].s.u &&
                  //         props.data[item.media_id].s.u.replaceAll("amp;", ""))
                  //     : "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1645192956.png?crop=1.00xw:1.00xh;0,0&resize=640:*"
                }
                // src={
                //   props.data[item.media_id].status == "valid"
                //     ? (props.data[item.media_id].s.gif &&
                //         props.data[item.media_id].s.gif) ||
                //       (props.data[item.media_id].s.u &&
                //         props.data[item.media_id].s.u.replaceAll("amp;", ""))
                //     : "https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1645192956.png?crop=1.00xw:1.00xh;0,0&resize=640:*"
                // }
              />
              {/* {item.media_id} */}
              {/* <img
              src={props.data[item.media_id].p[0].u.replaceAll("amp;", "")}
            /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalleryCard;
