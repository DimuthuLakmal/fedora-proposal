// These two functions are used by the feed widget to expand and collapse
// entries.
var expand_feed_entries = function(idx) {
    $("#expand-" + idx).addClass('hidden');
    $("#collapse-" + idx).removeClass('hidden');
    $("#content-" + idx).removeClass('hidden');
}
var collapse_feed_entries = function(idx) {
    $("#expand-" + idx).removeClass('hidden');
    $("#collapse-" + idx).addClass('hidden');
    $("#content-" + idx).addClass('hidden');
}
