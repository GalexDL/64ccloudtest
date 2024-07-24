import json
import tkinter as tk


def update_item_list(filename, item_ids, item_names):

    try:
        with open(filename, "r+") as f:
            data = json.load(f)
            if "item_list" not in data:
                data["item_list"] = {}
            item_list = data["item_list"]

            for item_id, entry, item_name in zip(item_ids, entry_values, item_names):
                try:
                    value = float(entry.get())
                    if value.is_integer():
                        value = int(value)
                    item_list[str(item_id)] = value
                except ValueError:
                    print(f"Invalid input for item {item_id if item_name is None else item_name}")  

            f.seek(0)
            json_data = json.dumps(data, indent=2)
            f.truncate(0)
            f.write(json_data)

    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")


def get_values():

    item_values = [entry.get() for entry in entry_values]
    update_item_list("save.json", item_ids, item_names)  
    window.destroy()  


# Item IDs 
item_ids = (999000, 999001, 999003, 999004, 999005, 999002, 999006)
item_names = ("Premium Ticket", "1-Pull Summoning Ticket", "10-Pull Summoning Ticket", "1-Pull Armament Ticket", "1-Pull Armament Ticket", "Dream Ticket Summon", "Dream Ticket Armament",)  # Example

# Main Window
window = tk.Tk()
window.title("WF Save Editor")


item_labels = []
entry_values = []
for i, item_id in enumerate(item_ids):
    item_name = item_names[i] if len(item_names) > i else f"Item {item_id}" 
    item_label = tk.Label(window, text=f"Amount of {item_name}:")
    item_label.pack()

    entry = tk.Entry(window)
    entry.pack()
    item_labels.append(item_label)
    entry_values.append(entry)

# Save
submit_button = tk.Button(window, text="Save", command=get_values)
submit_button.pack()

window.mainloop()

print(f"Successfully added item values to 'save.json'.")
