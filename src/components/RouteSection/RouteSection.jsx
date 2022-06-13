import React from 'react'
import "./routesection.css";
export const RouteSection = ({path}) => {
  return (
    <article className="route-section">
                <h2>Home/<span>{path}</span></h2>
            </article>
  )
}
