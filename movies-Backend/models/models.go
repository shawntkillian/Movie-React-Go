package main

import "time"

type Movie struct {
	ID          int       `json: "id"`
	Title       string    `json: "title"`
	Description string    `json: "description"`
	Year        int       `json: "year"`
	ReleaseDate time.Time `json: "ReleaseDate"`
	Runtime     int       `json: "runtime"`
	Rating      int       `json: "rating"`
	MPAARating  string    `json: "mpaa_rating"`
	CreatedAt   time.Time `json: "created_at"`
	UpdatedAt   time.Time `json: "updated_at"`
}
