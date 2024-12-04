import random
def merge(left, right):
    result = []
    i = j = 0

    # Compare elements from left and right arrays
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Append remaining elements from left to right
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

def sum_based_sort(array):
    # Base case: single element or empty array
    if len(array) <= 1:
        return array

    # Divide the array into two halves
    mid = len(array) // 2
    left = array[:mid]
    right = array[mid:]

    # Recursively sort left and right subarrays
    left_sorted = sum_based_sort(left)
    right_sorted = sum_based_sort(right)

    # Compare sums of the subarrays
    if sum(left_sorted) > sum(right_sorted):
        left_sorted, right_sorted = right_sorted, left_sorted

    # Merge sorted subarrays
    return merge(left_sorted, right_sorted)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # Append remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Example Usage
array = [random.randint(0,x) for x in range(1000000)]
sorted_array = sum_based_sort(array)
print(sorted_array)  # Output: [1, 2, 3, 5, 7, 8, 9]
