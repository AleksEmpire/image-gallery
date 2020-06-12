import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Consumer } from "../../Context";
export default class ImageCard extends Component {
  state = {
    isModalOpen: false,
    imgOpenSrc: "",
  };

  modalOpen = (e) => {
    let imgSrc = e.target.src;
    this.setState({
      isModalOpen: true,
      imgOpenSrc: imgSrc,
    });
    console.log("open");
  };
  render() {
    const { imgOpenSrc } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { images } = value;

          return images.map((image) => {
            const { id, user, views, likes, downloads, webformatURL } = image;
            const tags = image.tags.split(",");
            return (
              <div
                key={id}
                className="image-wrapper rounded overvflow-hidden shadow-lg"
              >
                <img
                  src={webformatURL}
                  alt=""
                  className="w-full"
                  onClick={this.modalOpen}
                />
                {this.state.isModalOpen && (
                  <Lightbox
                    mainSrc={imgOpenSrc}
                    // nextSrc={item[(index + 1) % item.length]}
                    // prevSrc={item[(index + item.length - 1) % item.length]}
                    onCloseRequest={() => this.setState({ isModalOpen: false })}
                    // onMovePrevRequest={() =>
                    //   this.setState({
                    //     photoIndex: (index + images.length - 1) % images.length,
                    //   })
                    // }
                    // onMoveNextRequest={() =>
                    //   this.setState({
                    //     photoIndex: (index + 1) % images.length,
                    //   })
                    // }
                  />
                )}
                <div className="px-6 py-4">
                  <div className="font-bold text-purple text-xl mb-2">
                    Photo by {user}
                  </div>
                  <ul>
                    <li>
                      <strong>Views: </strong>
                      {views}
                    </li>
                    <li>
                      <strong>Downloads</strong>
                      {downloads}
                    </li>
                    <li>
                      <strong>Likes: </strong>
                      {likes}
                    </li>
                  </ul>
                </div>
                <div className="px6 py-4">
                  {tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      >
                        #{tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          });
        }}
      </Consumer>
    );
  }
}
