'use strict';

module.exports = class EmbedBuilder {
    /**
     * @constructor
     */
    constructor() {
        this.setup({});
    }

    setup(data) {
        this.virulent = data.embed = {
            title: null,
            author: null,
            color: null,
            description: null,
            thumbnail: null,
            fields: [],
            image: null,
            footer: null,
            timestamp: null,
        };
    }

    /**
     * Sets the title of the embed.
     * @param {string} title The title
     * @returns {EmbedBuilder} This Embed
     */
    newTitle(title) {
        if (!title) { throw new Error('[Embed Error] Embed Titles can not be Empty, Please provide a proper title string.'); }
        if (title.length > 256) { throw new Error('[Embed Error] Embed Titles can not exceed a maximum of 256 Characters.'); }
        this.virulent.title = title;
        return this;
    }

    /**
     * Sets the description of the embed.
     * @param {string} description The description
     * @returns {EmbedBuilder} This Embed
     */
    newDescription(description) {
        if (!description) { throw new Error('[Embed Error] Embed Descriptions can not be Empty, Please provide a proper description string.'); }
        if (description.length > 2048) { throw new Error('[Embed Error] Embed Descriptions can not exceed a maximum of 2048 Characters.'); }
        this.virulent.description = description;
        return this;
    }

    /**
     * Sets the image of the embed.
     * @param {string} imageURL The URL of the image
     * @returns {EmbedBuilder} This Embed
     */
    newImage(imageURL) {
        if (!imageURL) { throw new Error('[Embed Error] No Image URL was provided for the "newImage" field, Please provide a proper Image URL'); }
        this.virulent.image = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the thumbnail of the embed.
     * @param {string} imageURL The URL of the thumbnail
     * @returns {EmbedBuilder} This Embed
     */
    newThumbnail(imageURL) {
        if (!imageURL) { throw new Error('[Embed Error] No Image URL was provided for the "newThumbnail" field, Please provide a proper Image URL'); }
        this.virulent.thumbnail = {
            url: imageURL
        };
        return this;
    }

    /**
     * Sets the footer of the embed.
     * @param {string} text The text of the footer
     * @param {string} iconURL The icon URL of the footer
     * @returns {EmbedBuilder} This Embed
     */
    newFooter(text, iconURL) {
        if (!text) { throw new Error('[Embed Error] No Footer Text was provided, Please provide a proper Footer Text string.'); }
        if (text.length > 2048) { throw new Error('[Embed Error] Footer Text can not exceed a maximum of 2048 Characters.'); }
        if (!iconURL) { throw new Error('[Embed Error] No Footer Image/Icon URL was provided, Please provide a proper Image/Icon URL'); }
        this.virulent.footer = {
            text: text,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the timestamp of the embed.
     * @returns {EmbedBuilder} This Embed
     */
    newTimestamp() {
        this.virulent.timestamp = new Date();
        return this;
    }

    /**
     * Sets the author of the embed.
     * @param {string} name The name of the author
     * @param {string} iconURL The icon URL of the author
     * @returns {EmbedBuilder} This Embed
     */
    newAuthor(name, iconURL) {
        if (!name) { throw new Error('[Embed Error] No Author Name was provided, Please provide a proper Author Name string.'); }
        if (name.length > 256) { throw new Error('[Embed Error] Embed Author Name can not exceed a maximum of 256 Characters.'); }
        if (!iconURL) { throw new Error('[Embed Error] No Author Image/Icon URL was provided, Please provide a proper Image/Icon URL'); }
        this.virulent.author = {
            name: name,
            icon_url: iconURL
        };
        return this;
    }

    /**
     * Sets the color of the embed.
     * @param {ColorResolvable} color The color of the embed
     * @returns {EmbedBuilder} This Embed
     */
    newColor(color) {
        if (!color) { throw new Error('[Embed Error] No Embed Color was provided, Please provide a proper Embed Color string.'); }
        this.virulent.color = color;
        return this;
    }

    /**
     * Adds a field to the embed.
     * @param {string} name The name of the field
     * @param {string} value The value of the field
     * @param {boolean} [inline=false] Set the field to display inline
     * @returns {EmbedBuilder} This Embed
     */
    newField(name, value, inline = false) {
        if (!name) { throw new Error('[Embed Error] No Field Name was provided, Please provide a proper Field Name string.'); }
        if (name.length > 256) { throw new Error('[Embed Error] Embed Field Names can not exceed a maximum of 256 Characters.'); }
        if (!value) { throw new Error('[Embed Error] Embed Field Values can not be Empty!, Please provide a proper Value to add to the Field.'); }
        if (value.length > 1024) { throw new Error('[Embed Error] Embed Field Values can not exceed a maximum of 1024 Characters,'); }
        if (this.virulent.fields.length > 25) { throw new Error('[Embed Error] Embeds can only include a maximum of 25 Embed Fields.'); }
        this.virulent.fields.push({
            name,
            value,
            inline: inline ? true : false
        });
        return this;
    }
};
