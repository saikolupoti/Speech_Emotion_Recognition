import os

def list_files(directory):
    l = []
    highest_number = 0
    latest_file = None
    
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        
        # Check if it's a .wav file
        if os.path.isfile(filepath) and filename.endswith(".wav"):
            # Split the filename to check for a number in parentheses
            base_name = filename.split('.')[0]
            parts = base_name.split('(')
            
            # Check if there's a number in parentheses
            if len(parts) > 1:
                try:
                    number = int(parts[1].split(')')[0])
                    
                    # Update the latest file if the number is the highest found so far
                    if number > highest_number:
                        highest_number = number
                        latest_file = filepath
                except ValueError:
                    continue  # Ignore files with invalid numbers in parentheses
    
    return latest_file if latest_file else None

# Example usage:
directory_path = "C:/Users/nalam/Downloads"
result = list_files(directory_path)
if result:
    print(result.replace('\\', '/'))
else:
    print("No valid .wav files found.")
