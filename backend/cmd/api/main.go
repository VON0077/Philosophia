package main

import (
	"log"

	"github.com/gin-gonic/gin"

	"backend/internal/config"
	"backend/internal/handlers"
)

func main() {
	cfg := config.Load()

	r := gin.Default()

	r.GET("/api/health", handlers.Health)
	r.GET("/api/ping", handlers.Ping)

	log.Println("server running on port " + cfg.Port)

	err := r.Run(":" + cfg.Port)
	if err != nil {
		log.Fatal(err)
	}
}