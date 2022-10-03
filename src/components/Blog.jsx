import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    Avatar,
    CardContent,
    Typography
} from '@mui/material';

export const Blog = ({ title, description, image, userName }) => {
    return (
        <div>
            {""}
            <Card sx={{
                width: "40%",
                margin: 'auto',
                mt: 2,
                padding: 2,
                boxShadow: "5px 5px 10px #ccc",
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc"
                }
            }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            <b>{userName}</b>{": "} {userName}
                        </Avatar>
                    }
                    title={title}
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Blog