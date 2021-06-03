import "./CategoryList.css";
import { Category, categoryKeys } from "../Category/Category";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
var randomColor = require("randomcolor");

export const categoryStorage = JSON.parse(
  localStorage.getItem("categoryStorage")
);
