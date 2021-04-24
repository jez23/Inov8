import React, { useContext, useState } from 'react';

import Context from '../../../contexts/Context';

const FilterProducts = () => {


    
    const { showProduct, 
        setShowProduct,
        buttonGroup,
        setButtonGroup,
        resetAllButton,
        chosenButton,
        filterAndRecommend} = useContext(Context);
    
    return (
        <div className="filterProducts">

            <h2>Your Activity - Running</h2>
          
            <div>
                <h4>Type of Run Activity?</h4>
                <div className="buttonArea">
                    {buttonGroup.activity.map( (activity, i) => {
                        return <button className={`btn ${activity.status ? 'active' : 'secondary'}`} key={`activity${i}`} onClick={() => chosenButton(buttonGroup, "activity", i, activity.value)}>{activity.name}</button>
                    })}
                </div>
            </div>
            <div>
                <h4>Type of Terrain?</h4>
                <div className="buttonArea">
                    {buttonGroup.terrain.map( (terrain, i) => {
                        return <button className={`btn ${terrain.status ? 'active' : 'secondary'}`} key={`terrain${i}`} onClick={() => chosenButton(buttonGroup, "terrain", i, terrain.value)}>{terrain.name}</button>
                    })}
                </div>
            </div>
            <div>
                <h4>Type of Activity Level?</h4>
                <div className="buttonArea">
                    {buttonGroup.level.map( (level, i) => {
                        return <button className={`btn ${level.status ? 'active' : 'secondary'}`} key={`level${i}`} onClick={() => chosenButton(buttonGroup, "level", i, level.value)}>{level.name}</button>
                    })}
                </div>
            </div>
            <div>
                <h4>What Width Do You Prefer?</h4>
                <div className="buttonArea">
                    {buttonGroup.width.map( (width, i) => {
                        return <button className={`btn ${width.status ? 'active' : 'secondary'}`} key={`width${i}`} onClick={() => chosenButton(buttonGroup, "width", i, width.value)}>{width.name}</button>
                    })}
                </div>
            </div>
            <div>
                <h4>What Type Of Cushioning?</h4>
                <div className="buttonArea">
                    {buttonGroup.cushioning.map( (cushioning, i) => {
                        return <button className={`btn ${cushioning.status ? 'active' : 'secondary'}`} key={`cushion${i}`} onClick={() => chosenButton(buttonGroup, "cushioning", i, cushioning.value)}>{cushioning.name}</button>
                    })}
                </div>
            </div>
            <div className="buttonArea__actions">
                <button className="btn primary" type="submit" onClick={() => filterAndRecommend()}>Search</button>
                <button className="btn primary right" onClick={() => resetAllButton(buttonGroup)}>Reset</button>
            </div>
            </div>
     
    )
}

export default FilterProducts;
