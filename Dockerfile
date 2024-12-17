# A nginx file that copys all the files from the build folder to the nginx server
# and runs the server

# Use the official Nginx image
FROM nginx:latest

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx index.html file
RUN rm -rf ./*

# Copy all files from the current directory to the Nginx HTML directory
COPY . .

# Expose port 80 to access the service
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]