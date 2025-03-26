import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 dark:bg-gray-900 shadow-md z-50">
      <h1 className="header">Dolunay Dagci | Software Engineer</h1>

      <div className="md:hidden">
        <IconButton onClick={() => setOpen(true)} style={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#resume" className="hover:underline">
          Resume
        </a>
        <a href="#hobbies" className="hover:underline">
          Hobbies
        </a>
      </nav>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={() => setOpen(false)} 
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#040436",  
            color: "white",
          },
        }}
      >
        <List className="w-48">
          <ListItem button component="a" href="#resume" onClick={() => setOpen(false)}>
            <ListItemText className="drawerfont" primary="Resume" />
          </ListItem>
          <ListItem button component="a" href="#hobbies" onClick={() => setOpen(false)}>
            <ListItemText className="drawerfont" primary="Free Time" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}
