import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';
import connect from 'stores/connect';

/* component styles */
import s from './styles.css';

class Dashboard extends Component {
  static propTypes = {
    posts: PropTypes.object,
    auth: PropTypes.object
  };

  componentDidMount() {

  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    if (!isAuthenticated()) {
      this.login();
    }

    return (
      <section className={s.root}>
        <Helmet
          title="Dashboard"
        />

        <div className="bp2-dashboard-v2-active768-px">
          <div style={{width: 768, height: '100%', position: 'relative', margin: 'auto'}}>
            <div className="bp2-group8"><img className="bp2-bgheader" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbgheader@2x.png" />
              <div className="bp2-logo-bw"><img className="bp2-habits" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxhabits@2x.png" /><img className="bp2-pro" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxpro@2x.png" /></div>
              <div className="bp2-menu">
                <div className="bp2-home"><img className="bp2-image2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxhome@2x.png" /></div>
                <a href="journalhome768pxcopy">
                  <div className="bp2-journal"><img className="bp2-combined-shape" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxcombined shape@2x.png" /><img className="bp2-image1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxcombined shape  1@2x.png" /><img className="bp2-group4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxgroup 4@2x.png" /></div>
                </a>
              </div><img className="bp2-avatar-company" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768px avatar company@2x.png" /></div>
            <div className="bp2-quote"><img className="bp2-bg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbg@2x.png" />
              <div className="bp2-author">
                <div className="bp2-stacked-group"><img className="bp2-avatar" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxavatar@2x.png" />
                  <div className="bp2-winston-churchill">WINSTON CHURCHILL </div>
                </div>
              </div>
              <div className="bp2-sep" />
              <div className="bp2-paragraph"><img className="bp2-quote-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxquote icon@2x.png" />
                <div className="bp2-without-tradition-a">Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse. </div>
              </div>
            </div>
            <div className="bp2-your-growth-copy"><img className="bp2-image3" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbg  1@2x.png" />
              <div className="bp2-group3">
                <div className="bp2-indicator-streak">
                  <div className="bp2-img"><img className="bp2-image4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbg  2@2x.png" /><img className="bp2-oval11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 11@2x.png" /><img className="bp2-icon-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon copy@2x.png" /></div>
                  <div className="bp2-streak">STREAK </div>
                  <div className="bp2-a09">09 </div>
                </div>
                <div className="bp2-indicator-days-competed">
                  <div className="bp2-view1"><img className="bp2-oval4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 4@2x.png" /><img className="bp2-oval4-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 4 copy 2@2x.png" /></div>
                  <div className="bp2-a12">12 </div>
                  <div className="bp2-days-competed">DAYS<br />COMPETED </div>
                </div>
              </div>
              <div className="bp2-header"><img className="bp2-headerbg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxheaderbg@2x.png" />
                <div className="bp2-see-more-link">
                  <div className="bp2-see-more">SEE MORE </div><img className="bp2-line" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxline@2x.png" /></div>
                <div className="bp2-your-growth">YOUR GROWTH </div>
              </div>
            </div>
            <div className="bp2-our-growth"><img className="bp2-image5" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbg  3@2x.png" />
              <div className="bp2-view2"><img className="bp2-image6" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxsep@2x.png" /><img className="bp2-image7" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxsep  1@2x.png" /><img className="bp2-rectangle2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxrectangle 2@2x.png" /></div>
              <div className="bp2-items">
                <div className="bp2-people-currently">
                  <div className="bp2-people-currently-on">PEOPLE CURRENTLY<br />ON 5+ DATE STREAKS </div>
                  <div className="bp2-a24">20 </div><img className="bp2-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon@2x.png" /></div>
                <div className="bp2-people-finished">
                  <div className="bp2-label1">200 </div><img className="bp2-image8" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon  1@2x.png" />
                  <div className="bp2-icommits-today">PEOPLE HAVE FINISHED<br />THIS PROHABIT 1X </div>
                </div>
                <div className="bp2-daily-challenges">
                  <div className="bp2-label2">DAILY CHALLENGES<br />COMPLETED </div>
                  <div className="bp2-a1000">1000 </div>
                  <div className="bp2-group6"><img className="bp2-image9" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon  2@2x.png" /><img className="bp2-iconpath" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxiconpath@2x.png" /></div>
                </div>
                <div className="bp2-i-commits">
                  <div className="bp2-label3">"ICOMMITS" TODAY </div>
                  <div className="bp2-label4">24 </div><img className="bp2-image10" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon  3@2x.png" /></div>
                <div className="bp2-co-workers-working">
                  <div className="bp2-label5">200 </div><img className="bp2-image11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxicon  4@2x.png" />
                  <div className="bp2-label6">CO-WORKERS WORKING<br />ON THIS PROHABIT </div>
                </div>
              </div>
              <div className="bp2-view3"><img className="bp2-image12" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxheaderbg  1@2x.png" />
                <div className="bp2-view4">
                  <div className="bp2-label7">SEE MORE </div><img className="bp2-image13" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxline  1@2x.png" /></div>
                <div className="bp2-label8">OUR GROWTH </div>
              </div>
            </div>
            <div className="bp2-activity"><img className="bp2-image14" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxbg  4@2x.png" />
              <div className="bp2-group2">
                <div className="bp2-group14">
                  <div className="bp2-allen-colon">Allen Colon </div>
                  <div className="bp2-reached10-day-strea-copy">REACHED 10 DAY STREAK TODAY! </div>
                  <div className="bp2-a1024-am">10:24 AM </div><img className="bp2-oval10-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 10 copy@2x.png" /></div>
              </div>
              <div className="bp2-group2-copy">
                <div className="bp2-group13">
                  <div className="bp2-alexander-bowers">Alexander Bowers </div>
                  <div className="bp2-label9">REACHED 10 DAY STREAK TODAY! </div>
                  <div className="bp2-label10">10:24 AM </div><img className="bp2-image15" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 10 copy  1@2x.png" /></div>
              </div>
              <div className="bp2-group2-copy2">
                <div className="bp2-group12">
                  <div className="bp2-blanche-curtis">Blanche Curtis </div>
                  <div className="bp2-label11">REACHED 10 DAY STREAK TODAY! </div>
                  <div className="bp2-label12">10:24 AM </div><img className="bp2-image16" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 10 copy  2@2x.png" /></div>
              </div>
              <div className="bp2-group2-copy3">
                <div className="bp2-group11">
                  <div className="bp2-derek-lee">Derek Lee </div>
                  <div className="bp2-label13">REACHED 10 DAY STREAK TODAY! </div>
                  <div className="bp2-label14">10:24 AM </div><img className="bp2-image17" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 10 copy  3@2x.png" /></div>
              </div><img className="bp2-image18" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxsep  2@2x.png" />
              <div className="bp2-top-user">
                <div className="bp2-bennett-knight">Bennett Knight </div>
                <div className="bp2-label15">10:24 AM </div>
                <div className="bp2-reached10-day-strea">REACHED 10 DAY STREAK TODAY! </div><img className="bp2-oval10-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 10 copy 2@2x.png" /><img className="bp2-image19" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxoval 11  1@2x.png" /><img className="bp2-fill1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxfill 1@2x.png" /></div>
              <div className="bp2-view5"><img className="bp2-image20" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxheaderbg  2@2x.png" />
                <div className="bp2-view6">
                  <div className="bp2-label16">SEE MORE </div><img className="bp2-image21" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxline  2@2x.png" /></div>
                <div className="bp2-label17">ACTIVITY </div>
              </div>
            </div>
            <div className="bp2-todays-challenge"><img className="bp2-image22" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxcombined shape  2@2x.png" />
              <a href="dashboardv2complete768pxcopy">
                <div className="bp2-i-commit">
                  <div className="bp2-rectangle" />
                  <div className="bp2-label18">I Commit </div>
                </div>
              </a>
              <div className="bp2-btn-view" />
              <div className="bp2-view7">
                <div className="bp2-think-of-a-new-tradi">Think of a new tradition to start in the office that celebrates a win for the team. Next, get some coworkers advice and thoughts on the idea. Consider implementing the tradition after the next success. </div>
                <div className="bp2-family-traditions">Family Traditions </div>
              </div>
              <div className="bp2-view8"><img className="bp2-image23" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  768pxheaderbg  3@2x.png" />
                <div className="bp2-label19">TODAY’S CHALLENGE </div>
                <div className="bp2-a1221">12/21 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bp3-dashboard-v2-active320-px">
          <div className="bp3-todays-challenge-layout-container">
            <div className="bp3-todays-challenge"><img className="bp3-combined-shape" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxcombined shape@2x.png" />
              <a href="dashboardv2complete768pxcopy">
                <div className="bp3-i-commit">
                  <div className="bp3-rectangle" />
                  <div className="bp3-label1">I Commit </div>
                </div>
              </a>
              <div className="bp3-paragraph">
                <div className="bp3-think-of-a-new-tradi">Think of a new tradition to start in the office that celebrates a win for the team. Next, get some coworkers advice and thoughts on the idea. Consider implementing the tradition after the next success. </div>
                <div className="bp3-family-traditions">Family Traditions </div>
              </div>
              <div className="bp3-header"><img className="bp3-headerbg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxheaderbg@2x.png" />
                <div className="bp3-label2">TODAY’S CHALLENGE </div>
                <div className="bp3-a1221">12/21 </div>
              </div>
            </div>
          </div>
          <div className="bp3-quote-layout-container">
            <div className="bp3-quote"><img className="bp3-bg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbg@2x.png" />
              <div className="bp3-author">
                <div className="bp3-stacked-group"><img className="bp3-avatar" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxavatar@2x.png" />
                  <div className="bp3-winston-churchill">WINSTON CHURCHILL </div>
                </div>
              </div>
              <div className="bp3-sep" />
              <div className="bp3-view1"><img className="bp3-quote-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxquote icon@2x.png" />
                <div className="bp3-without-tradition-a">Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse. </div>
              </div>
            </div>
          </div>
          <div className="bp3-your-growth-copy-layout-container">
            <div className="bp3-your-growth-copy"><img className="bp3-image1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbg  1@2x.png" />
              <div className="bp3-group3">
                <div className="bp3-indicator-streak">
                  <div className="bp3-img"><img className="bp3-image2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbg  2@2x.png" /><img className="bp3-oval11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 11@2x.png" /><img className="bp3-icon-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon copy@2x.png" /></div>
                  <div className="bp3-streak">STREAK </div>
                  <div className="bp3-a09">09 </div>
                </div>
                <div className="bp3-indicator-days-competed">
                  <div className="bp3-view2"><img className="bp3-oval4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 4@2x.png" /><img className="bp3-oval4-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 4 copy 2@2x.png" /></div>
                  <div className="bp3-a12">12 </div>
                  <div className="bp3-days-competed">DAYS<br />COMPETED </div>
                </div>
              </div>
              <div className="bp3-view3"><img className="bp3-image3" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxheaderbg  1@2x.png" />
                <div className="bp3-see-more-link">
                  <div className="bp3-see-more">SEE MORE </div><img className="bp3-line" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxline@2x.png" /></div>
                <div className="bp3-your-growth">YOUR GROWTH </div>
              </div>
            </div>
          </div>
          <div className="bp3-our-growth-layout-container">
            <div className="bp3-our-growth"><img className="bp3-image4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbg  3@2x.png" />
              <div className="bp3-view4"><img className="bp3-image5" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxsep@2x.png" /><img className="bp3-image6" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxsep  1@2x.png" /><img className="bp3-rectangle2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxrectangle 2@2x.png" /></div>
              <div className="bp3-items">
                <div className="bp3-people-currently">
                  <div className="bp3-people-currently-on">PEOPLE CURRENTLY<br />ON 5+ DATE STREAKS </div>
                  <div className="bp3-a24">20 </div><img className="bp3-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon@2x.png" /></div>
                <div className="bp3-people-finished">
                  <div className="bp3-label3">200 </div><img className="bp3-image7" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon  1@2x.png" />
                  <div className="bp3-people-have-finished">PEOPLE HAVE FINISHED THIS<br />PROHABIT 1X </div>
                </div>
                <div className="bp3-daily-challenges">
                  <div className="bp3-icommits-today">DAILY CHALLENGES<br />COMPLETED </div>
                  <div className="bp3-a1000">1000 </div>
                  <div className="bp3-group6"><img className="bp3-image8" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon  2@2x.png" /><img className="bp3-iconpath" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxiconpath@2x.png" /></div>
                </div>
                <div className="bp3-i-commits">
                  <div className="bp3-label4">"ICOMMITS" TODAY </div>
                  <div className="bp3-label5">24 </div><img className="bp3-image9" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon  3@2x.png" /></div>
                <div className="bp3-co-workers-working">
                  <div className="bp3-label6">200 </div><img className="bp3-image10" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxicon  4@2x.png" />
                  <div className="bp3-co-workers-working-o">CO-WORKERS<br />WORKING ON THIS<br />PROHABIT </div>
                </div>
              </div>
              <div className="bp3-view5"><img className="bp3-image11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxheaderbg  2@2x.png" />
                <div className="bp3-view6">
                  <div className="bp3-label7">SEE MORE </div><img className="bp3-image12" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxline  1@2x.png" /></div>
                <div className="bp3-label8">OUR GROWTH </div>
              </div>
            </div>
          </div>
          <div className="bp3-activity-layout-container">
            <div className="bp3-activity"><img className="bp3-image13" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbg  4@2x.png" /><img className="bp3-image14" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxsep  2@2x.png" />
              <div className="bp3-top-user"><img className="bp3-oval10-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 10 copy 2@2x.png" /><img className="bp3-image15" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 11  1@2x.png" /><img className="bp3-fill1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxfill 1@2x.png" />
                <div className="bp3-group5">
                  <div className="bp3-bennett-knight">Bennett Knight </div>
                  <div className="bp3-a1024-am">10:24 AM </div>
                </div>
                <div className="bp3-reached10-day-strea">REACHED 10 DAY STREAK TODAY! </div>
              </div>
              <div className="bp3-view7"><img className="bp3-image16" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxheaderbg  3@2x.png" />
                <div className="bp3-view8">
                  <div className="bp3-label9">SEE MORE </div><img className="bp3-image17" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxline  2@2x.png" /></div>
                <div className="bp3-label10">ACTIVITY </div>
              </div>
              <div className="bp3-stack-view1">
                <div className="bp3-group2">
                  <div className="bp3-group14"><img className="bp3-oval10-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 10 copy@2x.png" />
                    <div className="bp3-allen-colon">Allen Colon </div>
                    <div className="bp3-reached10-day-strea-copy">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp3-label11">10:24 AM </div>
                  </div>
                </div>
                <div className="bp3-group2-copy">
                  <div className="bp3-group13"><img className="bp3-image18" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 10 copy  1@2x.png" />
                    <div className="bp3-alexander-bowers">Alexander Bowers </div>
                    <div className="bp3-label12">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp3-label13">10:24 AM </div>
                  </div>
                </div>
                <div className="bp3-group2-copy2">
                  <div className="bp3-group12"><img className="bp3-image19" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 10 copy  2@2x.png" />
                    <div className="bp3-blanche-curtis">Blanche Curtis </div>
                    <div className="bp3-label14">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp3-label15">10:24 AM </div>
                  </div>
                </div>
                <div className="bp3-group2-copy3">
                  <div className="bp3-group11"><img className="bp3-image20" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxoval 10 copy  3@2x.png" />
                    <div className="bp3-derek-lee">Derek Lee </div>
                    <div className="bp3-label16">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp3-label17">10:24 AM </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bp3-footer"><img className="bp3-bgheader" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbgheader@2x.png" /><img className="bp3-habits" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxhabits@2x.png" /><img className="bp3-pro" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxpro@2x.png" /></div>
          <div className="bp3-view9-layout-container">
            <div className="bp3-view9"><img className="bp3-image21" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxbgheader  1@2x.png" />
              <div className="bp3-menu">
                <div className="bp3-home"><img className="bp3-image24" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxhome@2x.png" /></div>
                <a href="journalhome768pxcopy">
                  <div className="bp3-journal"><img className="bp3-image22" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxcombined shape  1@2x.png" /><img className="bp3-image23" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxcombined shape  2@2x.png" /><img className="bp3-group4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320pxgroup 4@2x.png" /></div>
                </a>
              </div><img className="bp3-avatar-company" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  320px avatar company@2x.png" /></div>
          </div>
        </div>
        <div className="bp1-dashboard-v2-active1920-px">
          <div className="bp1-cards-layout-container">
            <div className="bp1-cards">
              <div className="bp1-activity"><img className="bp1-bg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxbg@2x.png" />
                <div className="bp1-group2">
                  <div className="bp1-group14">
                    <div className="bp1-allen-colon">Allen Colon </div>
                    <div className="bp1-checked-in">CHECKED - IN </div>
                    <div className="bp1-a1024-am">10:24 AM </div><img className="bp1-oval10-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 10 copy@2x.png" /></div>
                </div>
                <div className="bp1-group2-copy">
                  <div className="bp1-group13">
                    <div className="bp1-alexander-bowers">Alexander Bowers </div>
                    <div className="bp1-reached10-day-strea-copy">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp1-label1">10:24 AM </div><img className="bp1-image1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 10 copy  1@2x.png" /></div>
                </div>
                <div className="bp1-group2-copy2">
                  <div className="bp1-group12">
                    <div className="bp1-blanche-curtis">Blanche Curtis </div>
                    <div className="bp1-label2">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp1-label3">10:24 AM </div><img className="bp1-image2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 10 copy  2@2x.png" /></div>
                </div>
                <div className="bp1-group2-copy3">
                  <div className="bp1-group11">
                    <div className="bp1-derek-lee">Derek Lee </div>
                    <div className="bp1-label4">REACHED 10 DAY STREAK TODAY! </div>
                    <div className="bp1-label5">10:24 AM </div><img className="bp1-image3" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 10 copy  3@2x.png" /></div>
                </div><img className="bp1-sep" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxsep@2x.png" />
                <div className="bp1-top-user">
                  <div className="bp1-bennett-knight">Bennett Knight </div>
                  <div className="bp1-label6">10:24 AM </div>
                  <div className="bp1-reached10-day-strea">REACHED 10 DAY STREAK TODAY! </div><img className="bp1-oval10-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 10 copy 2@2x.png" /><img className="bp1-oval11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 11@2x.png" /><img className="bp1-fill1" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxfill 1@2x.png" /></div>
                <div className="bp1-header"><img className="bp1-headerbg" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxheaderbg@2x.png" />
                  <div className="bp1-see-more-link">
                    <div className="bp1-see-more">SEE MORE </div><img className="bp1-line" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxline@2x.png" /></div>
                  <div className="bp1-label7">ACTIVITY </div>
                </div>
              </div>
              <div className="bp1-our-growth"><img className="bp1-image4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxbg  1@2x.png" />
                <div className="bp1-view1"><img className="bp1-image5" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxsep  1@2x.png" /><img className="bp1-image6" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxsep  2@2x.png" /><img className="bp1-rectangle2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxrectangle 2@2x.png" /></div>
                <div className="bp1-items">
                  <div className="bp1-people-currently">
                    <div className="bp1-people-currently-on">PEOPLE CURRENTLY ON<br />5+ DATE STREAKS </div>
                    <div className="bp1-a24">20 </div><img className="bp1-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon@2x.png" /></div>
                  <div className="bp1-people-finished">
                    <div className="bp1-label8">200 </div><img className="bp1-image7" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon  1@2x.png" />
                    <div className="bp1-icommits-today">PEOPLE HAVE FINISHED<br />THIS PROHABIT 1X </div>
                  </div>
                  <div className="bp1-daily-challenges">
                    <div className="bp1-label9">DAILY CHALLENGES<br />COMPLETED </div>
                    <div className="bp1-a1000">1000 </div>
                    <div className="bp1-group6"><img className="bp1-image8" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon  2@2x.png" /><img className="bp1-iconpath" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxiconpath@2x.png" /></div>
                  </div>
                  <div className="bp1-i-commits">
                    <div className="bp1-label10">"ICOMMITS" TODAY </div>
                    <div className="bp1-label11">24 </div><img className="bp1-image9" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon  3@2x.png" /></div>
                  <div className="bp1-co-workers-working">
                    <div className="bp1-label12">200 </div><img className="bp1-image10" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon  4@2x.png" />
                    <div className="bp1-label13">CO-WORKERS WORKING<br />ON THIS PROHABIT </div>
                  </div>
                </div>
                <div className="bp1-view2"><img className="bp1-image11" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxheaderbg  1@2x.png" />
                  <div className="bp1-view3">
                    <div className="bp1-label14">SEE MORE </div><img className="bp1-image12" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxline  1@2x.png" /></div>
                  <div className="bp1-label15">OUR GROWTH </div>
                </div>
              </div>
              <div className="bp1-your-growth-copy"><img className="bp1-image13" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxbg  2@2x.png" />
                <div className="bp1-group3">
                  <div className="bp1-indicator-streak">
                    <div className="bp1-img"><img className="bp1-image14" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxbg  3@2x.png" /><img className="bp1-image15" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 11  1@2x.png" /><img className="bp1-icon-copy" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxicon copy@2x.png" /></div>
                    <div className="bp1-streak">STREAK </div>
                    <div className="bp1-a09">09 </div>
                  </div>
                  <div className="bp1-indicator-days-competed">
                    <div className="bp1-view4"><img className="bp1-oval4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 4@2x.png" /><img className="bp1-oval4-copy2" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxoval 4 copy 2@2x.png" /></div>
                    <div className="bp1-a12">12 </div>
                    <div className="bp1-days-competed">DAYS<br />COMPETED </div>
                  </div>
                </div>
                <div className="bp1-view5"><img className="bp1-image16" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxheaderbg  2@2x.png" />
                  <div className="bp1-view6">
                    <div className="bp1-label16">SEE MORE </div><img className="bp1-image17" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxline  2@2x.png" /></div>
                  <div className="bp1-your-growth">YOUR GROWTH </div>
                </div>
              </div>
              <div className="bp1-quote"><img className="bp1-image18" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxbg  4@2x.png" />
                <div className="bp1-author">
                  <div className="bp1-stacked-group"><img className="bp1-avatar" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxavatar@2x.png" />
                    <div className="bp1-winston-churchill">WINSTON CHURCHILL </div>
                  </div>
                </div>
                <div className="bp1-view7" />
                <div className="bp1-paragraph"><img className="bp1-quote-icon" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxquote icon@2x.png" />
                  <div className="bp1-without-tradition-a">Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse. </div>
                </div>
              </div>
              <div className="bp1-todays-challenge"><img className="bp1-combined-shape" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxcombined shape@2x.png" />
                <a href="dashboardv2complete768pxcopy">
                  <div className="bp1-i-commit">
                    <div className="bp1-rectangle" />
                    <div className="bp1-label17">I Commit </div>
                  </div>
                </a>
                <div className="bp1-view8">
                  <div className="bp1-think-of-a-new-tradi">Think of a new tradition to start in the office that celebrates a win for the team. Next, get some coworkers advice and thoughts on the idea. Consider implementing the tradition after the next success. </div>
                  <div className="bp1-family-traditions">Family Traditions </div>
                </div>
                <div className="bp1-view9"><img className="bp1-image19" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxheaderbg  3@2x.png" />
                  <div className="bp1-label18">TODAY’S CHALLENGE </div>
                  <div className="bp1-a1221">12/21 </div>
                </div>
              </div>
            </div>
          </div>
          <a name="sidebar">
          </a><div className="bp1-sidebar"><a name="sidebar">
          <div className="bp1-logo-bw"><img className="bp1-habits" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxhabits@2x.png" /><img className="bp1-pro" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxpro@2x.png" /></div>
        </a><div className="bp1-menu"><a name="sidebar">
          <div className="bp1-home"><img className="bp1-image22" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxhome@2x.png" /></div>
        </a><a href="journalhome768pxcopy">
          <div className="bp1-journal"><img className="bp1-image20" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxcombined shape  1@2x.png" /><img className="bp1-image21" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxcombined shape  2@2x.png" /><img className="bp1-group4" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920pxgroup 4@2x.png" /></div>
        </a>
        </div><img className="bp1-avatar-company" src="https://anima-uploads.s3.amazonaws.com/590915e47e20f8000c945afc/591f41455b9626000b1425d0/591f4b2188012c000d4ce68d/img/dashboardv2active  1920px avatar company@2x.png" /></div>
        </div>

      </section>
    );
  }
}

export default connect(observer(Dashboard));
