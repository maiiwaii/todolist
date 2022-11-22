import React, { useState, useEffect } from "react";
import config from "../config";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

// import moment from "moment/moment";

const User = () => {
  const [api, setApi] = useState([]);

  const getUser = async () => {
    await axios.get(`${config.server}/user.php`).then((response) => {
      console.log("test", response);
      setApi(response.data.result);
    });
  };

  console.log(api);

  useEffect(() => {
    getUser();
    // splitDate();
  }, []);

  return (
    <div className="container a">
      {api.map((data) => (
        <div className="name">
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            {data.firstname} {data.lastname}
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;
