import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter as Router, Switch, Route } from "react-router-dom";
import "./fonts/Gilroy-Light.ttf"
// SCREENS
import Justdial from "./Pages/Justdial";
import Indiamart from "./Pages/Indiamart";
import Zapier from "./Pages/Zapier";
import Facebook from "./Pages/Facebook";
import SharedFile from "./Pages/SharedFile";
import SharedPage from "./Pages/SharedPage";
import SignUp from "./Pages/SignUp";
import Website from "./Pages/Website";
import Wordpress from "./Pages/Wordpress";
import GoogleLeadForm from "./Pages/GoogleLeadForm";
import Typeform from "./Pages/Typeform";
import TradeIndia from "./Pages/TradeIndia";
import Housing from "./Pages/Housing";
import GoogleAds from "./Pages/GoogleAds";
import Acres from "./Pages/Acres";
import MagicBricks from "./Pages/MagicBricks";
import SharedPageList from "./Pages/SharedPageList";
import BussinessCard from "./Pages/BussinessCard";

export default (props) => {
    return (
        <div>
            <Switch>
                {/* <Route path="/integration/Justdial/:user_id/:userIdEnc" component={Justdial} />
                <Route path="/integration/Indiamart/:user_id/:userIdEnc" component={Indiamart} />
                <Route path="/integration/Zapier/:user_id/:userIdEnc" component={Zapier} />
                <Route path="/integration/Facebook/:user_id/:userIdEnc" component={Facebook} /> */}
                <Route path={["/integration/Justdial/:user_id", "/integration/Justdial/:user_id/:userIdEnc"]} component={Justdial} />
                <Route path={["/integration/Indiamart/:user_id/", "/integration/Indiamart/:user_id/:userIdEnc"]} component={Indiamart} />
                <Route path={["/integration/Housing/:user_id/", "/integration/Housing/:user_id/:userIdEnc"]} component={Housing} />
                <Route path={["/integration/GoogleAds/:user_id/", "/integration/GoogleAds/:user_id/:userIdEnc"]} component={GoogleAds} />
                <Route path={["/integration/Acres/:user_id/", "/integration/Acres/:user_id/:userIdEnc"]} component={Acres} />
                <Route path={["/integration/MagicBricks/:user_id/", "/integration/MagicBricks/:user_id/:userIdEnc"]} component={MagicBricks} />
                <Route path={["/integration/Zapier/:user_id", "/integration/Zapier/:user_id/:userIdEnc"]} component={Zapier} />
                <Route path={["/integration/Facebook/:user_id", "/integration/Facebook/:user_id/:userIdEnc"]} component={Facebook} />
                <Route path={["/integration/Wordpress/:user_id/", "/integration/Wordpress/:user_id/:userIdEnc"]} component={Wordpress} />
                <Route path={["/integration/Website/:user_id", "/integration/Website/:user_id/:userIdEnc"]} component={Website} />
                <Route path={["/integration/GoogleLeadForms/:user_id/:user_type", "/integration/GoogleLeadForms/:user_id/:type"]} component={GoogleLeadForm} />
                <Route path={["/integration/TradeIndia/:user_id/", "/integration/TradeIndia/:user_id/:type"]} component={TradeIndia} />
                <Route path={["/integration/Typeform/:user_id/", "/integration/Typeform/:user_id/:type"]} component={Typeform} />
                <Route path="/:uniqueLinkId/file/:content_id" component={SharedFile} />
                <Route path="/page/:uniqueLinkId" component={SharedPage} />
                <Route path="/pageList/:uniqueLinkId" component={SharedPageList} />
                <Route path="/invite/:userIdEnc" component={SignUp} />
                <Route path="/bussinessCard" component={BussinessCard} />
            </Switch>
        </div>
    );
};
