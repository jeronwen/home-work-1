import React from "react";

export const UserInfo = ({ result }) => {
  return (
    <div href="/login" class="app-user">
      <div class="app-user_info">
        <div class="app-user_image">
          <img
            height={"90px"}
            width={"90px"}
            src={result.avatar_url}
            alt="avatar"
          />
        </div>
        <div class="app-user_data">
          <h1 class="app-user_name">
            {result.name}
            <span>{result.login}</span>
          </h1>
          <p class="app-user_about">{result.bio}</p>
        </div>
      </div>
      <ul class="app-user_stats">
        <li class="app-user_stats-item">
          Репозитории
          <br />
          <span>{result.public_repos}</span>
        </li>
        <li class="app-user_stats-item">
          Подписчиков
          <br />
          <span>{result.followers}</span>
        </li>
        <li class="app-user_stats-item">
          Звёзд
          <br />
          <span>{result.public_repos}</span>
        </li>
      </ul>
      <ul class="app-user_location">
        <li class="app-user_location-item">{result.location}</li>
        <li class="app-user_location-item">
          <a href={result.blog}>{result.blog}</a>
        </li>
      </ul>
    </div>
  );
};
