import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from './components/Booking';
import Login from './components/Login';
import Register from './components/Register';
import SeatingPlan from './components/SeatingPlan';
import BookingHistory from './components/BookingHistory';
import Profile from './components/Profile';
import Payment from './components/Payment';
import Admin from './components/Admin';
import ManageBookings from './components/ManageBookings';
import ModifyBooking from './components/ModifyBooking';
import Feedback from './components/Feedback';
import TrainDetails from './components/TrainDetails';
import FeedbackFilter from './components/FeedbackFilter';
import FeedbackDashboard from './components/FeedbackDashboard';
import FeedbackComment from './components/FeedbackComment';
import FeedbackDetail from './components/FeedbackDetail';
import FeedbackAnalytics from './components/FeedbackAnalytics';
import NotificationSettings from './components/NotificationSettings';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/booking" component={Booking} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/seating-plan" component={SeatingPlan} />
                <Route path="/booking-history" component={BookingHistory} />
                <Route path="/profile" component={Profile} />
                <Route path="/payment" component={Payment} />
                <Route path="/admin" component={Admin} />
                <Route path="/manage-bookings" component={ManageBookings} />
                <Route path="/modify-booking" component={ModifyBooking} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/train-details" component={TrainDetails} />
                <Route path="/feedback-filter" component={FeedbackFilter} />
                <Route path="/feedback-dashboard" component={FeedbackDashboard} />
                <Route path="/feedback-comment" component={FeedbackComment} />
                <Route path="/feedback-detail" component={FeedbackDetail} />
                <Route path="/feedback-analytics" component={FeedbackAnalytics} />
                <Route path="/notification-settings" component={NotificationSettings} />
            </Switch>
        </Router>
    );
}

export default App;
