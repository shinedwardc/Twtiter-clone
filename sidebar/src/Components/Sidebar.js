import Button from './Button'
import '../App.css';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const Sidebar = () => {
  return (
    <div className = "sidebar">
        <Button text = "Home" Icon = {HomeRoundedIcon}/>
        <Button text = "Explore" Icon = {TagRoundedIcon}/>
        <Button text = "Notifications" Icon = {NotificationsRoundedIcon}/>
        <Button text = "Messages" Icon = {EmailRoundedIcon}/>
        <Button text = "Bookmarks" Icon = {BookmarksRoundedIcon}/>
        <Button text = "Lists" Icon = {ArticleRoundedIcon}/>
        <Button text = "Profile" Icon = {AccountBoxRoundedIcon}/>
        <Button text = "More" Icon = {MoreHorizRoundedIcon}/>
    </div>
  )
}

export default Sidebar