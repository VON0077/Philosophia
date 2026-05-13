package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func Health(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"ok":      true,
		"message": "backend is running",
	})
}

func Ping(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func Echo(c *gin.Context) {
	var body struct {
		Message string `json:"message"`
	}

	if err := c.BindJSON(&body); err != nil {
		c.JSON(400, gin.H{
			"error": "invalid JSON",
		})
		return
	}

	c.JSON(200, gin.H{
		"you_sent": body.Message,
	})
}
