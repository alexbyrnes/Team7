library(shiny)
library(shinydashboard)

library(xlsx)
articles <- read.xlsx("SampleArticlesData.xlsx", sheetName="Sheet1")
articles$TimeLength <- articles$Length/200
articles$Popularity <- articles$Clicks/max(articles$Clicks)
articles$Age <- Sys.Date() - articles$Datetime
articles$AgeRank <- as.numeric(1- (articles$Age/max(as.numeric(articles$Age))))
articles$Rank <- articles$AgeRank*articles$Popularity
articles <- articles[order(-articles$Rank),]

ui <- dashboardPage(
  dashboardHeader(title = "Flinder"),
  dashboardSidebar(
    selectInput("tottime", "Total Reading Time", choices = c("5 minutes", "15 minutes", "30 minutes", "1 hour"), selected = "Less than 5 minutes"),
    selectInput("arttime", "Article Length", choices = c("Less than 1 minute", "1 to 5 minutes", "5 to 15 minutes", "More than 15 minutes"), selected = "Less than 1 minute"),
    checkboxGroupInput("topics", "Topics",
                       c("ForeignAffairs", "Entertainent", "Health", "Local", "Sports"),
                       selected="")
  ),
  dashboardBody(
    fluidRow(
      box(textOutput("art1"), width=12)
    )
  )
)

server <- function(input, output) {
  
  output$art1 <- renderText({
    if(input$arttime == "Less than 1 minute") {
      arts <- articles[articles$TimeLength <= 1,]
    } else if(input$arttime == "1 to 5 minutes") {
      arts <- articles[articles$TimeLength > 1 & articles$TimeLength <= 5,]
    } else if(input$arttime == "5 to 15 minutes") {
      arts <- articles[articles$TimeLength > 5 & articles$TimeLength <= 15,]
    } else if(input$arttime == "More than 15 minutes") {
      arts <- articles[articles$TimeLength > 15,]
    }
    
    if(input$tottime == "5 minutes") {
      tlimit <- 5 
      tactual <- 0 
      n <- 1
      while(tactual < tlimit) {
        tactual <- tactual + articles[n, "TimeLength"]
        n <- n + 1
      }
      parts <- articles[1:n,]
    } else if(input$tottime == "15 minutes") {
      tlimit <- 15 
      tactual <- 0 
      n <- 1
      while(tactual < tlimit) {
        tactual <- tactual + articles[n, "TimeLength"]
        n <- n + 1
      }
      parts <- articles[1:n,]
    } else if(input$tottime == "30 minutes") {
      tlimit <- 30 
      tactual <- 0 
      n <- 1
      while(tactual < tlimit) {
        tactual <- tactual + articles[n, "TimeLength"]
        n <- n + 1
      }
      parts <- articles[1:n,]
    } else if(input$tottime == "1 hour") {
      tlimit <- 60 
      tactual <- 0 
      n <- 1
      while(tactual < tlimit) {
        tactual <- tactual + articles[n, "TimeLength"]
        n <- n + 1
      }
      parts <- articles[1:n,]
    }
    
    artsparts <- intersect(arts$Name, parts$Name) 
    
    tops <- articles[articles$Tags %in% input$topics,]
    
    result <- intersect(artsparts, tops$Name)
    as.character(result)})
}

shinyApp(ui, server)
