"use client";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"));
export default HeavyComponent;
