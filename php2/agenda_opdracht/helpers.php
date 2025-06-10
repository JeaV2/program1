<?php
function formatDate($dateValue) {
if (empty($dateValue)) {
return '';
}

// Check if it's a Unix timestamp (numeric and longer than 10 digits)
if (is_numeric($dateValue) && strlen($dateValue) >= 10) {
// Handle both seconds and milliseconds timestamps
$timestamp = strlen($dateValue) > 10 ? intval($dateValue / 1000) : intval($dateValue);
return date('Y-m-d', $timestamp);
}

// If it's already in a date format, try to parse and reformat it
$date = DateTime::createFromFormat('Y-m-d', $dateValue);
if ($date !== false) {
return $date->format('Y-m-d');
}

// Try other common date formats
$date = DateTime::createFromFormat('Y-m-d H:i:s', $dateValue);
if ($date !== false) {
return $date->format('Y-m-d');
}

// If all else fails, try strtotime
$timestamp = strtotime($dateValue);
if ($timestamp !== false) {
return date('Y-m-d', $timestamp);
}

// Return original value if nothing works
return $dateValue;
}