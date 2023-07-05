'use client'

import { 
  Card as CardMUI,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

export default function Card({
    image, title, subtitle, actions
  }: {
    image ?: string | undefined,
    title: string | undefined,
    subtitle: React.ReactNode,
    actions: React.ReactNode,
  }) {
    return(
        <CardMUI>
              <CardMedia
                image = {image}
                title = {title} 
                sx={{pt:'56%'}}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography>
                  {subtitle}
                </Typography>
              </CardContent>
              {
                actions
                ?(<CardActions>
                     {actions}
                  </CardActions>
                  ): null
              }              
        </CardMUI>
    )
}