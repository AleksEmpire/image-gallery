import React, { Component } from "react";
import { Consumer } from "../../Context";
export default class ImageCard extends Component {
  render() {
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
                className="max-w-sm rounded overvflow-hidden shadow-lg"
              >
                <img src={webformatURL} alt="" className="w-full" />
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
